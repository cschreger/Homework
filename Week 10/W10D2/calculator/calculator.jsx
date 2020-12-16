import React from 'react';

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
        result: 0,
        num1: '',
        num2: ''
    }

    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleMult = this.handleMult.bind(this);
    this.handleDiv = this.handleDiv.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  setNum1(e) {
      e.preventDefault();
      this.setState({ num1: e.currentTarget.value})
  }

  setNum2(e) {
      e.preventDefault();
      this.setState({ num2: e.currentTarget.value})
  }

  handleAdd() {
      this.setState({
          result: parseInt(this.state.num1) + parseInt(this.state.num2)
      })
  }

  handleMinus() {
      this.setState({
          result: parseInt(this.state.num1) - parseInt(this.state.num2)
      })
  }

  handleMult() {
      this.setState({
          result: parseInt(this.state.num1) * parseInt(this.state.num2)
      })
  }

  handleDiv() {
      this.setState({
          result: parseInt(this.state.num1) / parseInt(this.state.num2)
      })
  }

  handleClear() {
      this.setState({
          result: 0,
          num1: '',
          num2: ''
      })
  }

  render() {
    const {num1, num2, result} = this.state
    return (
    <>
      <div>
        <h1>{result}</h1> 
        <input onChange={this.setNum1} value={num1}></input>
        <input onChange={this.setNum2} value={num2}></input>
        <button onClick={this.handleClear}>Clear</button>
      </div>
      <div>
          <button onClick={this.handleAdd}>+</button>
          <button onClick={this.handleMinus}>-</button>
          <button onClick={this.handleMult}>*</button>
          <button onClick={this.handleDiv}>/</button>
      </div>
    </>
    );
  }
}

export default Calculator;