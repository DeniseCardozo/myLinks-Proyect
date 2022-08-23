import './App.css';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home.jsx"
import NavBar from './components/NavBar/NavBar';
import WelcomePage from './components/WelcomePage/WelcomePage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <React.Fragment>
      <Route path={"/"} component={NavBar} />
      <Switch>
        <Route exact path={"/favourites/:id_user"} component={Home} />
        <Route exact path={"/home"} component={WelcomePage} />
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/register"} component={Register} />
      </Switch>

    </React.Fragment>
  );
}

export default App;
