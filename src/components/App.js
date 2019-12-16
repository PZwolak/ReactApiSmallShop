import React, { Component } from "react";
import "./App.scss";
import Header from "./header/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.hanldeInputValue = this.hanldeInputValue.bind(this);
  }
  state = {
    searchInputValue: "asd"
  };
  hanldeInputValue() {
    this.setState({
      searchValue: "aaaaaaaaa"
    });
  }

  render() {
    return (
      <>
        <Header searchValue={this.hanldeInputValue} />
      </>
    );
  }
}

export default App;
