import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class LoginPage extends Component{
  render(){
    return(
      <div>
        <h1>This is a Login Page</h1>
        <NavLink to="/home">Click here, to go Home Page</NavLink>
      </div>
    )
  }
}

export default LoginPage;