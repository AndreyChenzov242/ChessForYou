import React from "react";
import Slider from "react-slick";


import {IntroSliderCard} from '../IntroSliderCard';
import {IntroSliderCardData} from '../../../../constants/IntroSliderCardData';

import './styles.scss';




export class IntroSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      arrows: false,
      slidesToShow:1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 5000,
      // vertical: true,
      //verticalSwiping: true,
    };
    return (
      <Slider className="home-slider"{...settings}>
          {IntroSliderCardData.map((card, index) => {
            return (
              <IntroSliderCard
                title={card.title}
                des={card.des}
                btnText1={card.btnText1}
                btnText2={card.btnText2}
                img={card.img}
                key={index}
              />
            );
          })}
      </Slider>
    );
  }
}