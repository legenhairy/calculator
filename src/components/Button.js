import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

  runHandleClick = () => (
  	this.props.handleClick(this.props.name)
  )

  render() {
  	return (
  	  <button onClick={this.runHandleClick}>{this.props.name}</button>
  	);
  }		
}

export default Button;
