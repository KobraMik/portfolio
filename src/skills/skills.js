import React from "react";
import style from "./skills.module.css"
import styleContainer from "../common/styles/container.module.css"
import Skill from "./skill/Skill";


function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My skills</h2>
                <div className={style.allSkills}>
                    <div className={style.skills}>
                        <Skill title="WEB" description="description1 "/>
                        <Skill title="JS" description="description2 lorem description4 lorem description4 lorem description4 lorem description4 lorem description4 lorem description4 lorem description4 lorem description4 lorem description4  "/>
                        <Skill title="REACT" description="description3 lorem description4 lorem description4 lorem description4 lorem description4 lorem description4 lorem description4 lorem description4 lorem description4 lorem description4  lorem description4 lo "/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
