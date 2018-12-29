import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './App.css';
import Thumbnails from "./components/Thumbnails";
import BigImage from "./components/BigImage";


interface MyProps {
  galleryStore?: any
}

interface MyState {}

@inject('galleryStore')
@observer
class App extends Component <MyProps, MyState>  {
  componentDidMount() {
    this.props.galleryStore.fetchGallery();
  }

  render() {
    return (
      <div className="App">
        <Thumbnails />
        <BigImage />
      </div>
    );
  }
}

export default App;
