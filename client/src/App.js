import './App.css';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home.jsx"
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <React.Fragment>
      <Route path={"/"} component={NavBar} />
      <Switch>
        <Route exact path={"/:id_user"} component={Home} />
      </Switch>

    </React.Fragment>
  );
}

export default App;
