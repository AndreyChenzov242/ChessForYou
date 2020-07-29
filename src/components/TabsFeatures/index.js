import React from "react";

// Modules

import types from "prop-types";

import { ReactIcon } from "../ReactIcon"

export const TabsFeatures = ({prop}) => {
  // console.log("prop:",prop);

  return (
    <li className="list__item">
      <ReactIcon size="xl">
        {prop.icon()}
      </ReactIcon>
      <div className="article">
        <div className="title">{prop.title}</div>
        <div className="descr">
        {prop.desc}
        </div>
      </div>
    </li>
  );
};
