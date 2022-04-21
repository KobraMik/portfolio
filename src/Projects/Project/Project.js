import React from "react";
import style from "./Project.module.scss";

function Project(props) {
    return (
        <div className={style.project}>
            <a className={style.image} style={props.style}>
            </a>
            <h3 >
                <a href="#">{props.title}</a>
            </h3>
            <div className={style.description}>
                <p>
                    {props.description}
                </p>
            </div>
        </div>)
}

export default Project;
