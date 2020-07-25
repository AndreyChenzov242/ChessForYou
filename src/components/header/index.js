import React from "react";

//Components

import Button from "../../components/atoms/button";
import { ContentWidthLimiter } from "../ContentWidthLimiter";

//Styles
import "./styles.scss";
import "../../styles/index.scss";

export default function Header() {
  return (
    <header className="header ds">
      <ContentWidthLimiter>
        <div className="header-wrapper">
          <div className="header-wrapper__logo"></div>
          <div className="button-wrapper">
              <Button margin="mr-md" color="yellow">
                Вход
              </Button>
              <Button color="yellow">
                Регистрация
              </Button>
          </div>
        </div>
      </ContentWidthLimiter>
    </header>
  );
}
