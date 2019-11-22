import React from "react";
import "./App.css";
import Image from "./Images/Banner.jpg";
import Header from "./Components/Header";
import * as api from "./APICalls/index";
import Form from "./Components/Form";

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
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
