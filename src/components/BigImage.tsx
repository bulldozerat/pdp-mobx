import React from "react";
import { inject, observer } from 'mobx-react';

let BigImage = inject('galleryStore')(observer((props) => {
    return <img src={props.galleryStore.currentBigImage} alt="" className="big-gallery-image" />
}));

export default BigImage;