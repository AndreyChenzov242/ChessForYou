import React, { useState } from "react";

// Modules

import types from "prop-types";
import { createPortal } from 'react-dom';

// Components

import { Modal } from "../../../../components/Modal";
import Button from "../../../../components/atoms/Button";
// Styles

// import './styles.scss';
import "./styles.scss";

// ----------------

export const BurgerMenu = ({ open, onClose }) => {
  //console.log(open, onClose);
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
