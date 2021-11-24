import React, { Component } from 'react';

class LightOut extends Component {

  constructor(props){
    super(props);
    this.state = {
      isLightOn : false
    }
  }

  bulbOn(){
    this.setState({
      isLightOn : true
    })
  }

  bulbOff(){
    this.setState({
      isLightOn : false
    })
  }

  render() {
    return (
      <div className={this.state.isLightOn ? "day" : "night"}> 
        <h1 className={this.state.isLightOn ? "blackText m-top-0" : "whiteText m-top-0"} >LightOut Task</h1>
        <div>
          <button onClick={() => this.bulbOn()}>Turn on the Light</button>
         {
           this.state.isLightOn ? 
            <img src={require("./images/pic_bulbon.gif").default} /> 
            : 
            <img src={require("./images/pic_bulboff.gif").default} />
         } 
          <button onClick={() => this.bulbOff()}>Turn off the Light</button>
          
        </div>
      </div>
    );
  }
}

export default LightOut;