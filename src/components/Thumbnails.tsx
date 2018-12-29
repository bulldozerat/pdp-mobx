import React from "react";
import { inject, observer } from 'mobx-react';

let Thumbnails = inject('galleryStore')(observer((props) => {
    return (
        props.galleryStore.galleryData.map(
            (element: any, index: any) => {
                return <img src={element.thumbnail} key={index} data-big-image={element.large}/>
            }
        )
    )
}));

export default Thumbnails;