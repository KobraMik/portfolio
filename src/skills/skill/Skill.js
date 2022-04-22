import React from "react";
import style from "./Skill.module.scss"
import Fade from 'react-reveal/Fade';

function Skill(props) {
    return (
        <div className={style.skill}>
            <Fade left cascade>
                <div className={style.icon} style={props.image}></div>
                <div className={style.title}>{props.title}</div>
            </Fade>
        </div>
    );
}

export default Skill;
