import React from "react";

import classnames from "classnames";
import { ContentWidthLimiter } from "../../../components/ContentWidthLimiter";
import Button from "../../../components/atoms/button";
import {IntroSlider} from "./IntroSlider"

//Styles
import "./styles.scss";

export const IntroSection = () => {
  return (
    <div className="intro ds">
      <ContentWidthLimiter>
          <IntroSlider/>
      </ContentWidthLimiter>
      
    </div>
  );
};
