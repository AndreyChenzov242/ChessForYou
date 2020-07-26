import React from 'react';

//Components

import Button from "../../../components/atoms/button";
import { ContentWidthLimiter } from "../../../components/ContentWidthLimiter";

//Styles
import "./styles.scss";

export const Header = () => {
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
