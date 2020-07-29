import React from "react";

// Modules

import types from "prop-types";

import { TabsFeatures } from "../../components/TabsFeatures";
import { TabsCard } from "../../components/TabsCard";

import "./styles.scss";

export const tabLinks = [
  { name: "online", title: "online" },
  { name: "offline", title: "offline" },
];

export const tabsContent = [
  {
    name: "online",
    content: () => <TabsCard name={tabsContent[0].name}/>,
  },
  {
    name: "offline",
    content: () => <TabsCard name={tabsContent[1].name}/>,
  },
];

