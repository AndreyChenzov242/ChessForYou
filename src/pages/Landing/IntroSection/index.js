import React from 'react';

// Components

import { ContentWidthLimiter } from '../../../components/ContentWidthLimiter';
import { IntroSlider } from './IntroSlider';

//Styles

import './styles.scss';

// ----------------

export const IntroSection = () => {
  return (
    <div className="intro ds">
      <ContentWidthLimiter>
        <IntroSlider />
      </ContentWidthLimiter>
    </div>
  );
};
