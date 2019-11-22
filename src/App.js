import React from "react";
import "./App.css";
import Image from "./Images/Banner.jpg";
import Header from "./Components/Header";
// import Form from "./Components/Form";

class App extends React.Component {
  state = {
    average: 0,
    inputArtist: ""
  };
  render() {
    return (
      <div>
        <img
          src={Image}
          alt="woman standing in front of a instrumental neon backdrop"
        />

        <div className="App">
          <Header />
          {/* <Form /> */}
          <div>
            <p>Search an Artist to learn more about their lyrics below</p>
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
        </div>
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

export default App;
