import React from "react";
import { GlobalProvider } from "../Context/GlobalState";

import "./FoodIndustry.css";

import FoodNav from "./FoodNav/FoodNav";
import SubscribeBlock from "./SubscribeBlock/SubscribeBlock";
import FoodDescription from './FoodDescription/FoodDescription'
import FoodMenu from "./FoodMenu/FoodMenu";

const FoodIndustry = (props) => {
  return (
    <GlobalProvider>
      <div className="foodDiv">
        <FoodNav 
          companyName = {props.companyName}
        />
        <FoodDescription
                  businessMission = {props.businessMission}
        />
        <SubscribeBlock />
        <FoodMenu />
      </div>
    </GlobalProvider>
  );
};

export default FoodIndustry;
