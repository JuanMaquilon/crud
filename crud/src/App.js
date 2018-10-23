import React, { Component } from "react";
import Navbar from "./components/navbar";
import Detail from "./components/detail";
import Form from "./components/form";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar title="SANCOCHO" />
        <div className="container">
          <Detail />
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
