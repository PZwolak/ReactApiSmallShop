import React, { Component } from "react";

const API = "https://www.themealdb.com/api/json/v1/1/search.php?s";

class Results extends Component {
  componentDidMount() {
    const getDinner = async function() {
      await fetch(API)
        .then(response => {
          if (response.ok) {
            return response;
          }
          throw Error(response.status);
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => console.log(error + " Something went wrong"));
    };
    getDinner();
  }

  render() {
    return <div>aaaaaaaaaaaaaaaaaa</div>;
  }
}

export default Results;
