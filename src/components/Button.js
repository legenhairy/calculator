import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

   
  /*FINALLY FIXED ONCLICK BUTTONPROBLEM*/
  /*added the value attribute to the button, now i can grab the number for the click handler*/
  render() {
  	return (
  	  <button id={this.props.id} value={this.props.name} onClick={this.props.handleClick}>{this.props.name}</button>
  	);
  }		
}

export default Button;
