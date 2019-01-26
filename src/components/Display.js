import React, { Component } from 'react';
import './Display.css';

class Display extends Component {
	render() {
	  return(
	  <div id="display">
	  	{this.props.currentNum}
	  </div>
	  );	
	}
}



export default Display;