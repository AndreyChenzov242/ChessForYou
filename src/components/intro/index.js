import React from "react";

import classnames from "classnames";
import { ContentWidthLimiter } from "../ContentWidthLimiter";
import Button from "../../components/atoms/button";

//Styles
import "./styles.scss";
import "../../styles/index.scss";

export default function Intro(props) {
  return (
    <div className="intro ds">
      <ContentWidthLimiter>
        <div className="main-wrapper">
          <div class="title-wrapper d-flex flex-md-row main-wrapper ">
            <div class="img-wrapper"></div>
            <div class="text-wrapper">
              <span class="sub-title__span">Добро пожаловать</span>
              <h1 class="h1">
                Школа <span class="yellow"> шахмат </span>{" "}
                <span class="letter-spacing">для детей</span>
              </h1>
            </div>
          </div>
          <div class="descr">
            Мы нацелены на расширение и развитие шахмат как искусства, способа мышления и
            важного элемента культуры
          </div>
          <div class="main-wrapper">
            <Button size="xl" margin="mr-lg" variant="contained" color="yellow">
              Записаться
            </Button>
            <Button size="xl">Подробнее</Button>
          </div>
        </div>
      </ContentWidthLimiter>
    </div>
  );
}
