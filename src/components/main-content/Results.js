import React, { Component } from "react";
import Dinner from "./Dinner";
import "./Main-content.scss";
const API = "https://www.themealdb.com/api/json/v1/1/search.php?s";

class Results extends Component {
  state = {
    flag: false,
    dinners: []
  };
  componentDidMount() {
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
          this.setState({
            flag: true,
            dinners: response.meals
          });
        })
        .catch(error => console.log(error + " Something went wrong"));
    };
    getDinner();
  }

  render() {
    if (this.state.flag === true) {
      console.log(this.state.dinners);
      console.log("--------------------------------");
      const dinner = this.state.dinners.map(el => {
        return <div>{el.idMeal}</div>;
      });
      console.log(dinner);
    }
    return (
      <main className="dinner container mw-100">
        <div className="row">
          <section className="dinner__tags col-2"></section>
          <section className="dinner__elements col-10">
            <div className="row">
              <Dinner dinnerData={this.state.dinners} />
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default Results;
