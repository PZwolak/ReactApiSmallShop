import React, { Component } from "react";
import Dinner from "./Dinner";
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
      <div>
        <div>aaaaaa</div>
        <div>
          <Dinner dinnerData={this.state.dinners} />
          <button
            style={{
              padding: "10px 20px",
              border: "2px solid black",
              backgroundColor: "white",
              margin: 20
            }}
          >
            Dodaj użytkownika
          </button>
        </div>
      </div>
    );
  }
}

export default Results;
