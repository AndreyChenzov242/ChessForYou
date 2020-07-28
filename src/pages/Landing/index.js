import React from "react";

import { Header } from "./Header";
import { IntroSection } from "./IntroSection";
import {AboutSection} from "./AboutSection"

export const MainPage = () => {
  return (
    <div className="landing">
      <Header />
      <IntroSection />
      <AboutSection/>
    </div>
  );
};
