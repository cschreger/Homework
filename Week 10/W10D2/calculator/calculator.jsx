import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      result: 0,
      num1: "",
      num2: ""
    };
    this.setNum1 = this.setNum1.bind(this);

  }

  setNum1(event) {
    event.preventDefault();
    const num1 = this.state.res;
  }

  render(){
    return (
      <div>
        <h1>{this.state.result}</h1>

        <input onChange={this.setNum1} value={this.state.num1}></input>
        <input onChange={this.setNum2} value={this.state.num2}></input>

      </div>
    );
  }
}

export default Calculator;
