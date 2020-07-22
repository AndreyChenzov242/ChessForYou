import React from "react";


//Components

import Button from "../../components/atoms/button";


//Styles
import "./styles.scss";
import "../../styles/index.scss";



export default function Header() {
  return (
    <header className="header ds">
        <div className="content-container">
            <div className="header-wrapper">
                <div className="header-wrapper__logo">
                </div>
                <div className="button-wrapper">
                    <div className="button--left"><Button text="Вход" size="sm"/></div>
                    <div><Button text="Регистрация" size="sm"/></div>
                </div>
            </div>
        </div>
    </header>
  );
}
