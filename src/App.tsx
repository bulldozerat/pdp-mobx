import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './App.css';
import Thumbnails from "./components/Thumbnails";
import BigImage from "./components/BigImage";
import Arrows from "./components/Arrows";
import styled from "styled-components";

interface MyProps {
  galleryStore?: any
}

interface MyState {}

const GalleryWrapper = styled.div`
    width: 650px;
    position: relative;
    .big-gallery-image {
      width: 100%;
      height: 420px;
    }
    .arrow-left{
      position: absolute;
      left: 10px;
      top: 140px;
      width: 80px
    }
    .arrow-right{
      position: absolute;
      right: 10px;
      top: 140px;
      width: 80px
    }
`;

@inject('galleryStore')
@observer
class App extends Component <MyProps, MyState>  {
  componentDidMount() {
    this.props.galleryStore.fetchGallery();
  }

  render() {
    return (
      <GalleryWrapper>
        <BigImage />
        <Arrows />
        <Thumbnails />
      </GalleryWrapper>
    );
  }
}

export default App;
