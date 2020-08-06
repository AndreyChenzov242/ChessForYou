import React from "react";

// Components

import { Header } from "./Header";
import { IntroSection } from "./IntroSection";
import {AboutSection} from "./AboutSection"
import { ButtonUp } from '../../components/ButtonUp';

// Styles

import "./styles.scss";

// ----------------

export const MainPage = () => {
  return (
    <div className="landing">
      <Header />
      <IntroSection />
      <AboutSection/>
      <ButtonUp className="landing__button-up"/>
    </div>
  );
};
