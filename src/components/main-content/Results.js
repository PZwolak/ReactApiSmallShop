import React, { Component } from "react";
import Dinner from "./Dinner";
import "./Main-content.scss";

class Results extends Component {
  state = {
    flag: this.props.stateFlag,
    dinners: []
  };

  handleChangeStatus = id => {
    console.log(this);
  };

  getApi = () => {
    const API = `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.props.searchInputValue}`;
    const getDinner = () => {
      fetch(API)
        .then(response => {
          if (response.ok) {
            return response;
          }
          throw Error(response.status);
        })
        .then(response => response.json())
        .then(response => {
          console.log("this.state.flag");
          this.setState({
            flag: this.props.stateFlag,
            dinners: response.meals
          });
        })
        .catch(error => console.log(error + " Something went wrong"));
    };
    getDinner();
  };

  render() {
    if (this.state.flag === true) {
      this.getApi();
    }
    return (
      <main className="dinner container mw-100">
        <div className="row">
          <section className="dinner__tags col-2"></section>
          <section className="dinner__elements col-10">
            <div className="row">
              <Dinner
                dinnerData={this.state.dinners}
                changeStatus={this.handleChangeStatus}
                searchInputValue={this.props.searchInputValue}
              />
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default Results;
