import React, { Component } from "react";
import "./App.scss";
import Header from "./header/Header";

class App extends Component {
  state = {
    searchInputValue: "asd"
  };
  hanldeInputValue = () => {
    this.setState({
      searchInputValue: "aaaaaaaaa"
    });
  };

  render() {
    return (
      <>
        <Header searchValue={this.hanldeInputValue} />
      </>
    );
  }
}

export default App;
