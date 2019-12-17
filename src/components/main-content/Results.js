import React from "react";
// const API = "https://www.themealdb.com/api/json/v1/1/search.php?s";
const API = "https://www.themealdb.com/api/json/v1/1/random.php";
let dinnerArray = [];
// const times = 3;

const Results = props => {
  const getDinner = async function() {
    await fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then(response => response.json())
      .then(response => {
        dinnerArray.push(response.meals[0]);
      })
      .catch(error => console.log(error + " Something went wrong"));
  };
  //   for (let i = 0; i < times; i++) {
  //     getDinner();
  //   }
  getDinner();
  props.response(dinnerArray);
  return <div>aaaaaaaaaaaaaaaaaa</div>;
};

export default Results;
