import React from "react";

// Modules

import types from "prop-types";

export const tabLinks = [
  { name: "online", title: "online" },
  { name: "offline", title: "offline" },
];

export const tabsContent = [
  {
    name: "online",
    content: () => <div>online hello</div>,
  },
  {
    name: "offline",
    content: () => <div>offline hello</div>,
  },
];
