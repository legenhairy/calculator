import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

  /*passing the onClick function as a prop. a pass through for button click event*/	

 
  /*FINALLY FIXED ONCLICK BUTTONPROBLEM*/
  /*added the value attribute to the button, now i can grab the number for the click handler*/
  render() {
  	return (
  	  <button value={this.props.name} onClick={this.props.handleClick}>{this.props.name}</button>
  	);
  }		
}

export default Button;
