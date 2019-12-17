import React, { Component } from "react";
import "./App.scss";
import Header from "./header/Header";
import Results from "./main-content/Results";

class App extends Component {
  state = {
    searchInputValue: "asd"
  };

  // Function for set state from input in header
  hanldeInputValue = e => {
    if (e.key === "Enter") {
      this.setState({
        searchInputValue: e.target.value
      });
    }
  };

  // Function for set state from input in header throw clicking on magniffying glass
  handleSendInputValue = () => {
    this.setState({
      searchInputValue: document.querySelector(".search-input__input").value
    });
  };

  render() {
    return (
      <>
        <Header
          searchValue={this.hanldeInputValue}
          sendInputValue={this.handleSendInputValue}
        />
        <Results />
      </>
    );
  }
}

export default App;
