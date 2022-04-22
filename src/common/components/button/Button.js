import React from "react";
import style from "./Button.module.scss"


function Button(props) {
    return (
        <a className={style.button} href={props.href} target="_blank">
            {props.text}
        </a>
    )
}

export default Button;
