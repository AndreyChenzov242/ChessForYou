import React from "react";

import classnames from 'classnames';

//Styles
import "./styles.scss";

export default function Button(props) {

    const {text, size} = props;

    const buttonClass = classnames ({
        "button": true,
        [`button--size-${size}`]:size,
    });

    return (
    <button className={buttonClass}>
        {props.text}
    </button>
    );
}