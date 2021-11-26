import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import AboutUsPage from "./pages/about-us";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

import "./css/style.css";

class Application extends Component{
  
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/about-us" component={AboutUsPage}></Route>
          <Route path="/contact" component={ContactPage}></Route>
          <Route path="/home" component={HomePage}></Route>
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/signup" component={RegisterPage}></Route>
        </Switch>
      </BrowserRouter>
    )
  }

}

export default Application;