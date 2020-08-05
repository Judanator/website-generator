import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Homepage from "./components/Homepage/Homepage";
import Menu from "./components/Menu/Menu";
import Form from './components/Form/Form'
import SignUp from './components/Signup/Signup'
import Login from './components/Login/Login'

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Switch>
          <Route path="/" exact component={Homepage}></Route>
          <Route path="/form" exact component={Form}></Route>
          <Route path="/signup" exact component={SignUp}></Route>
          <Route path="/login" exact component={Login}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
