import React, { Component } from 'react';
import Button from './components/Button';
import Equals from './components/Equals';
import Display from './components/Display';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentNum: "0"
    }
  }


  render() {
    return (
      <div className="app">
        <Display currentNum={this.state.currentNum} /> 

        <div id="cal-grid">
          <Button id = "zero" name="0" />
          <Button id = "one" name="1" />
          <Button id = "two" name="2" />
          <Button id = "three" name="3" />
          <Button id = "four" name="4" />
          <Button id = "five" name="5" />
          <Button id = "six" name="6" />
          <Button id = "seven" name="7" />
          <Button id = "eight" name="8"/>
          <Button id = "nine" name="9" />
        </div>
      </div>
    );
  }
}

export default App;
