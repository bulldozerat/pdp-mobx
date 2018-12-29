import React, { Fragment } from "react";
import { inject, observer } from 'mobx-react';
import leftArrow from "../images/left.png";
import rightArrow from "../images/right.png";

let Arrows = inject('galleryStore')(observer((props) => {
    function leftArrowAction() {
        document.getElementById(props.galleryStore.activeImage).style.border = "none";
        let num = props.galleryStore.activeImage - 1 < 0 ? 7 : --props.galleryStore.activeImage;
        let image = document.getElementById(num).getAttribute("data-big-image");
        document.getElementById(num).style.border = "2px solid orange";
        props.galleryStore.arrowsChangeActive(num, image);
    }

    function rihtArrowAction() {
        document.getElementById(props.galleryStore.activeImage).style.border = "none";
        let num = props.galleryStore.activeImage + 1 > 7 ? 0 : ++props.galleryStore.activeImage;
        let image = document.getElementById(num).getAttribute("data-big-image");
        document.getElementById(num).style.border = "2px solid orange";
        props.galleryStore.arrowsChangeActive(num, image);
    }

    return (
        <Fragment>
            <img src={leftArrow} onClick={leftArrowAction} alt="" className="arrow-left"/>
            <img src={rightArrow} onClick={rihtArrowAction} alt="" className="arrow-right"/>
        </Fragment>
    )
}));


export default Arrows;