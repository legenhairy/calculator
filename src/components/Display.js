import React, { Component } from 'react';
import PropTypes from "prop-types";
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

Display.propTypes = {
	currentNum: PropTypes.string,
}

export default Display;