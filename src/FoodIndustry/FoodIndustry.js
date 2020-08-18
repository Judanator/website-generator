import React from "react";
import "./FoodIndustry.css";

import FoodNav from "./FoodNav/FoodNav";
import SubscribeBlock from './SubscribeBlock/SubscribeBlock'
import FoodMenu from './FoodMenu/FoodMenu'


const FoodIndustry = () => {
  return (
    <div className="foodDiv">
      <FoodNav />
      <SubscribeBlock />
      <FoodMenu />
    </div>
  );
};

export default FoodIndustry;
