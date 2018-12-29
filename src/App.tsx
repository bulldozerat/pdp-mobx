import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import logo from './logo.svg';
import './App.css';


interface MyProps {
  counterStore?: any
}

interface MyState {}

@inject('counterStore')
@observer
class App extends Component <MyProps, MyState>  {

  add = () => {
    this.props.counterStore.add();
  }
  
  substract = () => {
    this.props.counterStore.substract();
  }

  render() {
    return (
      <div className="App">
        <h1>HAHA</h1>
        <button onClick={this.add}>+1</button>
        <span>{this.props.counterStore.counter}</span>
        <button onClick={this.substract}>-1</button>
      </div>
    );
  }
}

export default App;
