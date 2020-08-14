import React from 'react';

// Styles

import './styles.scss';

// ----------------

export const ModalFooter = ({ footerData }) => {
  const { footerTitle, linkTitle, link } = footerData;

  return footerData ? (
    <div className="modal__footer">
      <div>{footerTitle}</div>
      <a href={link}>{linkTitle}</a>
    </div>
  ) : null;
};
