import React from "react";
import Slider from "react-slick";
// Modules

import types from "prop-types";

// Components

import { ReactIcon } from "../../../../components/ReactIcon";
import Button from "../../../../components/atoms/Button";

// Static

import player from "../../../../assets/images/home-slider-img-1.png";

// Styles

import "./styles.scss";

// ----------------

export const IntroSliderCard = ({ title, des, btnText1, btnText2, img }) => {
  return (
    <div className="main-wrapper">
      <div className="title-wrapper">
        <div className="img-wrapper">
          <img src={img} alt={img}/>
        </div>
        <div className="text-wrapper">
          <span className="sub-title__span">Добро пожаловать</span>
          <h1 className="title">
             Школа <span className="title--yellow"> шахмат </span>
            {/* <span className="letter-spacing">для детей</span> */}
             {title}
          </h1>
        </div>
      </div>
      <div className="descr">{des}</div>
      <div className="button-wrapper">
        <Button size="xl" margin="mr-lg" variant="contained" color="yellow">
          {btnText1}
        </Button>
        <Button size="xl">
          {btnText2}
        </Button>
      </div>
    </div>
  );
};

// Type of props

// HomeSliderCard.propTypes = {
//   example: types.bool,
// };

// // Default value for props

// HomeSliderCard.defaultProps = {
//   example: true,
// };
