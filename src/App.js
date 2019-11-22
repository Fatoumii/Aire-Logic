import React from "react";
import "./App.css";
import Image from "./Images/Banner.jpg";
import Header from "./Components/Header";
// import Form from "./Components/Form";

class App extends React.Component {
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
            <form onSubmit={e => e.preventDefault()}>
              <input
                className="artistinput"
                type="text"
                placeholder="Enter the Artist's name here..."
              />
              <br />
              <button type="submit">Get Results</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
