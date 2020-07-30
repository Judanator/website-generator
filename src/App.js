import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Homepage from "./components/Homepage/Homepage";
import Menu from "./components/Menu/Menu";
import Form from './components/Form/Form'

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Switch>
          <Route path="/" exact component={Homepage}></Route>
          <Route path="/form" exact component={Form}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
