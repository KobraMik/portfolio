import React from "react";
import style from "./Skill.module.scss"
import {faReact} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Skill(props) {


    return (
        <div className={style.skill}>
            <div className={style.icon}><FontAwesomeIcon icon={faReact}/></div>
            <div className={style.title}>{props.title}</div>
        </div>
    );
}

export default Skill;
