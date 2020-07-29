import React from "react";

// Modules

import classNames from "classnames";
import types from "prop-types";

// Components
import { TabsFeatures } from "../TabsFeatures";
import { FirstTabsLi, SecondTabsLi } from "./TabsLi";

// import components

// Styles

import "./styles.scss";

// ----------------

export const TabsCard = ({ title, name }) => {
  // console.log("FirstTabsLi:", FirstTabsLi);

  switch (name) {
    case "online":
      return (
        <div className="content">
          <div className="content__title">
            Наши особенности
            <span> {name}</span> обучения
          </div>
          <ul className="content__list">
            {FirstTabsLi.map((TabsLi,index) => {
              return <TabsFeatures prop={TabsLi} key={index} />;
            })}
          </ul>
        </div>
      );
      case "offline":
        return (
          <div className="content">
            <div className="content__title">
              Наши особенности
              <span> {name}</span> обучения
            </div>
            <ul className="content__list">
              {SecondTabsLi.map((TabsLi) => {
                return <TabsFeatures prop={TabsLi} />;
              })}
            </ul>
          </div>
        );
  }
};

// Type of props

// Name.propTypes = {
//   example: types.bool,
// };

// // Default value for props

// Name.defaultProps = {
//   example: true,
// };
