import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

  /*passing the onClick function as a prop. a pass through for button click event*/	

  render() {
  	return (
  	  <button onClick={this.props.handleClick}>{this.props.name}</button>
  	);
  }		
}

export default Button;
