import React from "react";

import classnames from "classnames";

//Styles
import "./styles.scss";

export default function Button({ children, size = "sm", margin, variant = "outlined", color = "white" }) {
  const buttonClass = classnames({
    button: true,
    [`button--size-${size}`]: size,
    [`button--${margin}`]: margin,
    [`button--color-${color}`]: color,
    [`button--variant-${variant}`]: variant,
  });

  return <button className={buttonClass}>{children}</button>;
}

// Button.propTypes = {
//     text = typeof.Str
// };
