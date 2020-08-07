import React from "react";

// Modules

import types from "prop-types";
import classnames from "classnames";

// Components

import { Button } from "../../../../components/atoms/Button";

// Styles

import "./styles.scss";

// ----------------

export const HeaderSideBar = ({ open, onClose, onLog, onReg }) => {
  console.log(open);
  console.log("im oppend HeaderSideBar");

  const headerSideBarClass = classnames({
    sideBar: true,
    [`sideBar--open`]: open,
  });

  return (
    <div open={open} onClose={onClose} className={headerSideBarClass}>
      <Button
        size="xs"
        color="yellow"
        variant="contained"
        onClick={() => onLog()}
        margin="mb-sm"
      >
        Вход
      </Button>
      <Button
        size="xs"
        color="yellow"
        variant="contained"
        onClick={() => onReg()}
      >
        Регистрация
      </Button>
    </div>
  );
};
