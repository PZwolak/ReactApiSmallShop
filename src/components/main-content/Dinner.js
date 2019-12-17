import React from "react";

const Dinner = props => {
  console.log(props.dinnerData);
  const dinners = props.dinnerData.map(dinner => (
    <div>
      {dinner.strMeal}
      <br></br>
      {dinner.strMealThumb}
      <br></br>
      {dinner.strYoutube}
      <hr></hr>
    </div>
  ));
  return dinners;
};

export default Dinner;
