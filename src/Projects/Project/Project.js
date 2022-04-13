import React from "react";
import style from "./Project.module.css";


function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.image} style={props.style}>
                <a className={style.buttonWatch}>Watch</a>
            </div>
            <h3>
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
