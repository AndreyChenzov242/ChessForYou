import React from 'react';

// Modules

import classNames from 'classnames';
import types from 'prop-types';

// Components
import { ContentWidthLimiter } from '../../../components/ContentWidthLimiter';

// Styles

import './styles.scss';

// ----------------

export const Footer = props => {
  const { example } = props;

  const nameClass = () =>
    classNames({
      'name-class': true,
      'name-class--example': example,
    });

  return (
    <footer>
      <ContentWidthLimiter></ContentWidthLimiter>
    </footer>
  );
};

// // Type of props

// Footer.propTypes = {
//   example: types.bool,
// };

// // Default value for props

// Footer.defaultProps = {
//   example: true,
// };
