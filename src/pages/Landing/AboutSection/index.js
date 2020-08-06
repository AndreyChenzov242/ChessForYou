import React from "react";

// Modules

import types from "prop-types";

// Components

import { ContentWidthLimiter } from "../../../components/ContentWidthLimiter";
import { TabsCard } from "./TabsCard";
import { tabLinks, tabsContent } from "../../../constants/TabsData";


// Styles

import "./styles.scss";

// ----------------

export const AboutSection = () => {

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
