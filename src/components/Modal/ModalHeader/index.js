import React from 'react';

// Modules

import { RiCloseLine } from 'react-icons/ri';

// Components

import { ReactIcon } from '../../ReactIcon';

// Styles

import './styles.scss';

// ----------------

export const ModalHeader = ({ onClose, title }) => {
  return onClose || title ? (
    <div className="modal-header">
      <a href="/" className="header-wrapper__logo"></a>

      {onClose && (
        <ReactIcon
          className="modal-header__close-btn"
          onClick={onClose}
          size="xl"
        >
          <RiCloseLine />
        </ReactIcon>
      )}
    </div>
  ) : null;
};
