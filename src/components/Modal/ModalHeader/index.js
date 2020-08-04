import React from 'react';

// Modules

import { AiOutlineCloseCircle } from 'react-icons/ai';

// Components

import { ReactIcon } from '../../ReactIcon';

// Styles

import './styles.scss';

// ----------------

export const ModalHeader = props => {
  const { onClose, title } = props;

  return onClose || title ? (
    <div className="modal-header">
      <a href="/" className="header-wrapper__logo"></a>

      {onClose && (
        <ReactIcon
          className="modal-header__close-btn"
          onClick={onClose}
          size="xl"
        >
          <AiOutlineCloseCircle />
        </ReactIcon>
      )}
    </div>
  ) : null;
};
