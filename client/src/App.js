import './App.css';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home.jsx"
import WelcomePage from './components/WelcomePage/WelcomePage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path={"/home/:id_user"} component={Home} />
        <Route exact path={"/"} component={WelcomePage} />
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/register"} component={Register} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
