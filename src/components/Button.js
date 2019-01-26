import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

  render() {
  	return (
  	  /*all we have to do here is return a html button object with its name*/
  	  <button id={this.props.id} className="button">{this.props.name}</button>
  	);
  }		
}

export default Button;
