import React, { Component } from 'react';
import './App.css';

class App extends Component {
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
