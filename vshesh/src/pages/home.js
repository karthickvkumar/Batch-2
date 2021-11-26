import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class HomePage extends Component{
  render(){
    return(
      <div>
        <h1>This is a Home Page</h1>
        <NavLink to="/login">Back to Login page</NavLink>
        <br></br>
        <NavLink to="/contact">Click here, to go Contact Page</NavLink>
      </div>
    )
  }
}

export default HomePage;