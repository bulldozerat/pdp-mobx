import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './App.css';
import Gallery from "./components/Gallery";


interface MyProps {
  galleryStore?: any
}

interface MyState {}

@inject('galleryStore')
@observer
class App extends Component <MyProps, MyState>  {
  render() {
    return (
      <div className="App">
        <Gallery />
      </div>
    );
  }
}

export default App;
