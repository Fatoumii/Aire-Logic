import React from "react";

class Form extends React.Component {
  state = {
    average: 0,
    inputArtist: ""
  };
  render() {
    return (
      <div>
        <p>Search an Artist to learn more about their lyrics below:</p>
        <form onSubmit={this.handleSubmit}>
          <input
            className="artistinput"
            type="text"
            placeholder="Enter the Artist's name here..."
            onChange={this.handleChange}
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
  handleSubmit = e => {
    e.preventDefault();
  };
}

export default Form;
