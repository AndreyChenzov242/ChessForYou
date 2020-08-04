import React from "react";

import classnames from "classnames";

//Styles
//import "./styles.scss";
import "../Button/styles.scss";

export default function Button({ children, size = "sm", margin, variant = "outlined", color = "white",  onClick}) {
  const buttonClass = classnames({
    button: true,
    [`button--size-${size}`]: size,
    [`button--${margin}`]: margin,
    [`button--color-${color}`]: color,
    [`button--variant-${variant}`]: variant,
  });

  return <button className={buttonClass} onClick={onClick}>{children} </button>;
}

// Button.propTypes = {
//     text = typeof.Str
// };
