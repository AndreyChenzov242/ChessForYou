import React from "react";

// Modules

import types from "prop-types";

// Components

import { TabsCard } from "../../components/TabsCard";

// Styles

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

