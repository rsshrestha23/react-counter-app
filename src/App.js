import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';


class App extends Component {

  state = {
    count: 0,
    showErrorMessage: false,
    message: ""
  }



  handleIncrement() {
    this.setState({
      count: this.state.count + 1,
      showErrorMessage: false,
      message: ""
    })
  }


  handleDecrement = () => {
    if (this.state.count > 0 || this.state.count !== 0) {
      this.setState({
        count: this.state.count - 1
      })
    } else {
      this.setState({
        showErrorMessage: true,
        message: "Count cannot be less than 0"
      })
    }
  }

  handleReset() {
    this.setState({
      count: 0,
      showErrorMessage: false,
      message: ""
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Counter App</h1>
        <h3>Count: {this.state.count}</h3>
        <Button
          flag="incrementCount"
          title="Increment"
          task={() => { this.handleIncrement() }}
        />
        <Button
          flag="decrementCount"
          title="Decrement"
          task={() => { this.handleDecrement() }}
        />
        {this.state.showErrorMessage === true ?
          <p style={{ color: "red" }}>{this.state.message}</p>
          : ""
        }
      </div>
    );
  }
}




export default App;
