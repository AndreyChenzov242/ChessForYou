import React from "react";
import Slider from "react-slick";


import {IntroSliderCard} from '../IntroSliderCard';

import './styles.scss';

const data = [
  {
    name: 'Landing page',
    des: 'Description example...',
  },
  {
    name: 'Application',
    des: 'Description example1...',
  },
];


export class IntroSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      // fade: true,

      slidesToShow:1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 5000,
      cssEase: "linear",
      vertical: true,
      verticalSwiping: true,
    };
    return (
      <Slider className="home-slider"{...settings}>
        <div className="home-slider__slide">
          <IntroSliderCard title="hey"/> 
          {/* {data.map((card, index) => {
            return (
              <IntroSliderCard
                name={card.name}
                des={card.des}
                key={index}
              />
            );
          })} */}
        </div>
         <div className="home-slider__slide">
          <IntroSliderCard title="2"/>
        </div>
        <div className="home-slider__slide">
          <IntroSliderCard title="3"/>
        </div> 
      </Slider>
    );
  }
}