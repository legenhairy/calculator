import React, { Component } from 'react';
import Button from 'components/Button';
import Equals from 'components/Equals';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentNum: 0
    }
  }


  render() {
    return (
      <div className="app">
        <div className="wrapper">Testing</div>
          <div id="cal-grid">
            <Button id = "zero"/>
            <Button id = "one"/>
            <Button id = "two"/>
            <Button id = "three"/>
            <Button id = "four"/>
            <Button id = "five"/>
            <Button id = "six"/>
            <Button id = "seven"/>
            <Button id = "eight"/>
            <Button id = "nine"/>
          </div>
      </div>
    );
  }
}

export default App;
