import React from "react";
import "./App.css";
import Image from "./Images/Banner.jpg";

class App extends React.Component {
  render() {
    return (
      <div>
        <img
          src={Image}
          alt="woman standing in front of a instrumental neon backdrop"
        />

        <div className="App">
          <h1>Artist Data</h1>
        </div>
      </div>
    );
  }
}

export default App;
