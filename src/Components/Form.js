import React from "react";
import * as api from "../APICalls/index";

class Form extends React.Component {
  state = {
    inputArtist: "",
    artistID: "",
    listofTracks: [],
    lengthOfSongs: []
  };

  render() {
    const { inputArtist, lengthOfSongs } = this.state;
    console.log(this.state.lengthOfSongs);
    return (
      <div>
        <p>Search an Artist to learn more about their lyrics below:</p>
        <form onSubmit={this.handleSubmit}>
          <input
            className="artistinput"
            type="text"
            placeholder="Enter the Artist's name here..."
            onChange={this.handleChange}
            value={inputArtist}
          />
          <br />
          <button type="submit">Get Results</button>
        </form>
        <p>
          {this.state.lengthOfSongs > 1
            ? `The average words ${inputArtist[0].toUpperCase() +
                inputArtist.slice(1)} has in her songs are ${lengthOfSongs}!`
            : null}
        </p>
        <p>
          {this.state.lengthOfSongs > 1
            ? `${inputArtist[0].toUpperCase() +
                inputArtist.slice(
                  1
                )}'s shortest song has ${lengthOfSongs} words, while the longest song has ${lengthOfSongs} words. Cool hey..`
            : null}
        </p>
      </div>
    );
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ inputArtist: value });
  };

  handleSubmit = async e => {
    const { inputArtist, artistID, listofTracks } = this.state;
    e.preventDefault();

    const ID = await api.searchArtistData(inputArtist);
    this.setState({ artistID: ID });

    const first100 = await api.browseArtistTracks(artistID);
    const remainingTracks = await api.remainingArtistTracks(artistID);
    this.setState({ listofTracks: [...first100, ...remainingTracks] });

    listofTracks.map(track => {
      return api
        .getLyrics(inputArtist, track)
        .then(response => {
          this.setState({ lengthOfSongs: response.split(" ").length });
        })
        .catch(error => {
          console.log("ERROR");
        });
    });
  };
}
export default Form;
