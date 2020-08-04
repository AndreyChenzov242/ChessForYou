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

export const LogInModal = (props) => {
  const { open = "true", onClose, title = "hello", data, onSave } = props;

  return (
    <Modal open={open} onClose={onClose} title={title} width="xxs">
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


        <div className="">
           <input type="checkbox" value="1" id="_remember_me" name="_remember_me"/>
            <label className="label-for-remember" for="_remember_me">Запомни меня</label>
         </div>
         <Button size="fluid" variant="contained" color="yellow" noHover="true">
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
