import React, {useEffect} from "react";
import axios from 'axios'
import { GlobalProvider } from "../Context/GlobalState";

import "./FoodIndustry.css";

import FoodNav from "./FoodNav/FoodNav";
import SubscribeBlock from "./SubscribeBlock/SubscribeBlock";
import FoodDescription from "./FoodDescription/FoodDescription";
import FoodMenu from "./FoodMenu/FoodMenu";

const FoodIndustry = (props) => {
  useEffect(() => {
    axios.get(`http://localhost:5000/getForm/${props.websiteID}`)
    .then(res => {
      console.log(res.data[0])
    })
  })

  console.log(props.websiteID)

  return (
    <GlobalProvider>
      <div className="foodDiv">
        <FoodNav companyName={props.companyName} />
        <FoodDescription businessMission={props.businessMission} />
        <SubscribeBlock />
        <FoodMenu />
      </div>
    </GlobalProvider>
  );
};

export default FoodIndustry;
