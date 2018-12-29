import React from "react";
import { inject, observer } from 'mobx-react';

let Thumbnails = inject('galleryStore')(observer((props) => {
    function test(e) {
        props.galleryStore.changeActiveImage(e);
    };

    return (
        props.galleryStore.galleryData.map(
            (element, index) => {
                return (
                    <img 
                        src={element.thumbnail} 
                        onClick={test} 
                        key={index} 
                        data-big-image={element.medium} 
                        id={index}
                        alt=""
                    />
            )}
        )
    )
}));


export default Thumbnails;