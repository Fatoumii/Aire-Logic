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
    const { inputArtist } = this.state;
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
      return api.getLyrics(inputArtist, track).then(res => {
        this.setState({ lengthOfSongs: [res] });
      });
    });
  };
}

export default Form;

//sort -min/max and average
