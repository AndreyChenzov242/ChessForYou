import React from "react";

// Modules

import types from "prop-types";
import { createPortal } from 'react-dom';

// Components

import {Button} from "../../../../components/atoms/Button";

// Styles

import "./styles.scss";

// ----------------

export const BurgerMenu = ({ open, onClose }) => {
  return createPortal(
    open ? (
    <BurgerMenu
      open={open}
      onClose={onClose}
      width="xxs"
      className="burgermenu"
    >
      <Button 
        margin="mr-md"
        color="yellow"
        onClick={() => this.onShowLogInModal()}
      >
        Вход
      </Button>
      <Button color="yellow">Регистрация</Button>
    </BurgerMenu>
  ): null, document.body

  );
};
