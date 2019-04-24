import React, { Component } from 'react';
import Button from './components/Button';
import Equals from './components/Equals';
import Display from './components/Display';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentNum: "", 
      operator: false,
      decimalFlag: false
    }
  }

  /*pass in the buttonname prop to figure out specific use case*/
  handleClick = (event) => {
    let currentNum = this.state.currentNum 
    let operator = this.state.operator
    /*check if event.target.value is a number*/
    switch(true) {
      
      case event.target.value === "0" || event.target.value === "1"
        || event.target.value === "2" || event.target.value === "3"
        || event.target.value === "4" || event.target.value === "5"
        || event.target.value === "6" || event.target.value === "7"
        || event.target.value === "8" || event.target.value === "9":
      if(this.state.currentNum !== "0") {
        currentNum += event.target.value
        operator = false /*this way, we can allow for chained operations*/
      } else {
        currentNum = event.target.value
      } 
      break  
      
      case event.target.value === "+" || event.target.value === "-"
        || event.target.value === "*" || event.target.value === "/":
      if(!this.state.operator){
        currentNum += event.target.value
        operator = true
      } else {
        const newNumber = currentNum.slice(0,currentNum.length-1)
        currentNum = newNumber
        currentNum += event.target.value
      }  
      break

      case event.target.value === "Clear":
        currentNum = "0"
        operator = false  
      break  
    
      case event.target.value === ".":
        if(!this.state.decimalFlag){
          currentNum += "."
          this.setState({decimalFlag: true})
        }

    }
    this.setState({operator})
    this.setState({currentNum})
  }  
  
  render() {
    return (
      <div className="app">
        <div id="cal-grid">
          <Display id= "display" currentNum={this.state.currentNum || "0"} /> 
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
