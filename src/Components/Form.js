import React from "react";
import * as api from "../APICalls/index";

class Form extends React.Component {
  state = {
    inputArtist: "",
    artistID: "",
    listofTracks: [],
    lengthOfSongs: [],
    loading: false
  };

  render() {
    const { inputArtist, lengthOfSongs, loading } = this.state;
    console.log(this.state);
    return (
      <div className="bodyOfText">
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
          <button onClick={this.handleClick}>Reset</button>
        </form>
        {loading ? (
          "Loading..."
        ) : (
          <div>
            <p>
              {lengthOfSongs.length > 1
                ? `The average words ${inputArtist[0].toUpperCase() +
                    inputArtist.slice(1)} has in her songs are ${Math.round(
                    this.getAverage(lengthOfSongs)
                  )}!`
                : null}
            </p>
            <p>
              {lengthOfSongs.length > 1
                ? `${inputArtist[0].toUpperCase() +
                    inputArtist.slice(1)}'s shortest song has ${
                    lengthOfSongs.sort((a, b) => {
                      return a - b;
                    })[0]
                  } words, while the longest song has ${
                    lengthOfSongs.sort((a, b) => {
                      return a - b;
                    })[lengthOfSongs.length - 1]
                  } words.`
                : null}
            </p>
          </div>
        )}
      </div>
    );
  }
  handleClick = () => {
    this.setState({
      inputArtist: "",
      artistID: "",
      listofTracks: [],
      lengthOfSongs: []
    });
  };
  getAverage = lengthOfSongs => {
    for (let i = 0; i < lengthOfSongs.length; i++) {
      if (lengthOfSongs[i] === 1) {
        lengthOfSongs.splice(i, 1);
      }
    }

    let sum = 0;
    for (let i = 0; i < lengthOfSongs.length; i++) {
      sum += lengthOfSongs[i];
    }
    return sum / lengthOfSongs.length;
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ inputArtist: value });
  };

  handleSubmit = async e => {
    const { inputArtist } = this.state;
    e.preventDefault();

    const ID = await api.searchArtistData(inputArtist);
    const first100 = await api.browseArtistTracks(ID);
    const remainingTracks = await api.remainingArtistTracks(ID);
    const allTracks = [...first100, ...remainingTracks];

    allTracks.map(async track => {
      return await api
        .getLyrics(inputArtist, track)
        .then(response => {
          this.setState({
            lengthOfSongs: [
              ...this.state.lengthOfSongs,
              response.split(" ").length
            ],
            loading: false
          });
        })
        .catch(e => {
          console.log("ERROR");
        });
    });
    this.setState({
      artistID: ID,
      listofTracks: allTracks,
      loading: true
      // lengthOfSongs: wordsInTracks
    });
  };
}
export default Form;
