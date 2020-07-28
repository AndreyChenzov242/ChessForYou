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
          <a href="/" className="header-wrapper__logo"></a>
          <div className="button-wrapper">
              <Button margin="mr-md" color="yellow">
                Вход
              </Button>
              <Button color="yellow">
                Регистрация
              </Button>
          </div>

          <div class="hamburger click" id="hamburger">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
          </div>
        </div>
      </ContentWidthLimiter>
    </header>
  );
}
