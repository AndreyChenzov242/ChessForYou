import React from 'react';
import Slider from "react-slick";
// Modules

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaBehance,
} from 'react-icons/fa';
import types from 'prop-types';

// Components

import { ReactIcon } from '../../../../components/ReactIcon';
import  Button from '../../../../components/atoms/button';

// Static

import player from '../../../../assets/images/home-slider-img-1.png';

// Styles

import './styles.scss';

// ----------------

export const IntroSliderCard = (props) => {
  const { name, des } = props;

    return (
       <div className="main-wrapper">
           <div className="title-wrapper d-flex flex-md-row main-wrapper ">
             <div className="img-wrapper"></div>
             <div className="text-wrapper">
               <span className="sub-title__span">Добро пожаловать</span>
               <h1 className="title">
                 Школа <span className="title--yellow"> шахмат </span>
                 <span class="letter-spacing">для детей</span>
               </h1>
             </div>
           </div>
           <div className="descr">
             Мы нацелены на расширение и развитие шахмат как искусства, способа
             мышления и важного элемента культуры
           </div>
           <div className="main-wrapper">
             <Button size="xl" margin="mr-lg" variant="contained" color="yellow">
               Записаться
             </Button>
             <Button size="xl">Подробнее</Button>
           </div>
         </div>
    //  <div className="home-link-card">
    //   <p className="home-link-card__title" >{name}</p>
    //   <p className="home-link-card__des">{des}</p>
    // </div>
    );
}

// Type of props

// HomeSliderCard.propTypes = {
//   example: types.bool,
// };

// // Default value for props

// HomeSliderCard.defaultProps = {
//   example: true,
// };
