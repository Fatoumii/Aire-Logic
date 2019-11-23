import React from "react";
import * as api from "../APICalls/index";

class Form extends React.Component {
  state = {
    inputArtist: "",
    artistID: "",
    listofTracks: []
  };
  render() {
    const { inputArtist } = this.state;
    console.log(this.state.listofTracks);
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
    const { inputArtist, artistID } = this.state;
    e.preventDefault();

    const ID = await api.searchArtistData(inputArtist);
    this.setState({ artistID: ID });

    const first100 = await api.browseArtistTracks(artistID);
    const remainingTracks = await api.remainingArtistTracks(artistID);
    this.setState({ listofTracks: [...first100, ...remainingTracks] });
  };
}

export default Form;

//now have list of tracks needed to comapre
//use other api to run through each track and then get the length - push into an array
//sort -min/max and average
//try and get the song name that is  min/max
//state- length of songs
