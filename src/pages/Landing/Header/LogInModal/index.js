import React, { useState } from "react";

// Modules

import types from "prop-types";

// Components

import { Modal } from "../../../../components/Modal";
import Button from "../../../../components/atoms/Button";
// Styles

// import './styles.scss';
import "./styles.scss";

// ----------------

export const LogInModal = ({open, onClose, data, onSave }) => {

  const footerData = {
    footerTitle: "Новый пользователь",
    linkTitle: "Зарегистрироваться здесь",
    link: "#"
  }

  return (
    <Modal open={open} onClose={onClose} footerData={footerData}  width="xxs">
        <input
          placeholder="Имя пользователя"
          //onChange={event => changeInputValue(event.target.value)}
          name="username-input"
          className="modal__input username"
        />
        <input
          placeholder="Пароль"
          //onChange={event => changeInputValue(event.target.value)}
          name="password"
          className="modal__input"
        />
        <div>
           <input type="checkbox" value="1" id="_remember_me" name="_remember_me"/>
            <label className="label-for-remember" htmlFor="_remember_me">Запомни меня</label>
         </div>
         <Button size="fluid" variant="contained" color="yellow" noHover="true" onClick={onClose}>
           Войти
         </Button>
    </Modal>
  );
};

// Type of props

LogInModal.propTypes = {
  example: types.bool,
};

// Default value for props

LogInModal.defaultProps = {
  example: true,
};
