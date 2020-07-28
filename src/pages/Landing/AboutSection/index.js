import React from "react";

// Modules

import classNames from "classnames";
import types from "prop-types";

// Components

import { ContentWidthLimiter } from "../../../components/ContentWidthLimiter";
import { TabsCard } from "./TabsCard";
import { tabLinks, tabsContent } from "../../../constants/TabsData";

// import components

// Styles

import "./styles.scss";

// ----------------

export const AboutSection = (props) => {
  const { example } = props;

  const nameClass = () =>
    classNames({
      "name-class": true,
      "name-class--example": example,
    });

  return (
    <div className="about">
      <ContentWidthLimiter>
          <TabsCard
            links={tabLinks}
            content={tabsContent}
            defaultTab={tabLinks[0].name}
          />
      </ContentWidthLimiter>
    </div>
  );
};
