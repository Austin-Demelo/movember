import React from "react"
import { BrowserRouter,Route, Switch } from "react-router-dom";

import Main from "./components/Main"
import Login from "./components/Login"
import t from "./components/t"
import Rankings from "./components/Rankings"
import Donate from "./components/Donate"

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
          <Route path="/" component={Main} exact/>
          <Route path="/Login" component={Login}/>
          <Route path="/t" component={t}/>
          <Route path="/Donate" component={Donate}/>
          <Route path="/Rankings" component={Rankings}/>
      </Switch>
    </div>
  );
}

export default App;
