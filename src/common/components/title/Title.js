import React from "react";
import style from "./Projects.module.css"


function Title(props) {
    return (
        <div className={style.title}>
            <h2>{props.text}</h2>
        </div>
    )
}

export default Title;
