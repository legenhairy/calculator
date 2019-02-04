import React, { Component } from 'react';
import Button from './components/Button';
import Equals from './components/Equals';
import Display from './components/Display';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentNum: ""
    }
  }

  handleClick = (event) => {
    console.log(event.target.value);
    this.setState({ currentNum: this.state.currentNum });  
  }



  render() {
    return (
      <div className="app">
        <div id="cal-grid">
          <Display currentNum={this.state.currentNum} /> 
          <Button id="zero" name="0" handleClick={this.handleClick} />
          <Button id="one" name="1" handleClick={this.handleClick} />
          <Button id="two" name="2" handleClick={this.handleClick} />
          <Button id="three" name="3" handleClick={this.handleClick} />
          <Button id="four" name="4" handleClick={this.handleClick} />
          <Button id="five" name="5" handleClick={this.handleClick} />
          <Button id="six" name="6" handleClick={this.handleClick} />
          <Button id="seven" name="7" handleClick={this.handleClick} />
          <Button id="eight" name="8" handleClick={this.handleClick} />
          <Button id="nine" name="9" handleClick={this.handleClick} />
          <Button id="clear" name="Clear" handleClick={this.handleClick} />
          <Button id="equals" name="=" handleClick={this.handleClick} />
          <Button id="divide" name="/" handleClick={this.handleClick} />
          <Button id="add" name="+" handleClick={this.handleClick} />
          <Button id="subtract" name="-" handleClick={this.handleClick} />
          <Button id="multiply" name="*" handleClick={this.handleClick} />
          <Button id="decimal" name="." handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
