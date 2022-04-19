import React from "react";
import style from "./Project.module.scss";
import Button from "../../common/components/button/Button";


function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.image} style={props.style}>
                <Button text='Watch'/>
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
