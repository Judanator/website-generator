import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import { GlobalProvider } from "./Context/GlobalState";

import Homepage from "./components/Homepage/Homepage";
import Form from "./components/Form/Form";
import Login from "./components/Login/Login";

import Loading from "./components/UI/Loading/Loading";

///////////////////////       INDUSTRIES        //////////////////////
import FoodIndustry from "./FoodIndustry/FoodIndustry";
import Website from "./components/Websites/Website";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Homepage}></Route>
            <Route path="/form" exact component={Form}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/foodindustry" exact component={FoodIndustry}></Route>
            <Route path="/loading" exact component={Loading}></Route>
            <Route path="/website/:id" exact component={Website}></Route>
            
          </Switch>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
