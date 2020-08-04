import React from "react";

import { Header } from "./Header";
import { IntroSection } from "./IntroSection";
import {AboutSection} from "./AboutSection"
import { ButtonUp } from '../../components/ButtonUp';

import "./style.scss";

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
