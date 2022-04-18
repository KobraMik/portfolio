import React from "react";
import style from "./Skill.module.scss"

function Skill(props) {



    return (
        <div className={style.skill}>
            <div className={style.icon} style={props.image}>
            </div>
            <div className={style.title}>{props.title}</div>
            <span className={style.description}>{props.description}</span>
        </div>
    );
}

export default Skill;
