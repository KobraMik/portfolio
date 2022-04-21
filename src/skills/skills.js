import React from "react";
import style from "./skills.module.scss"
import Title from "../common/components/title/Title";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faReact, faJsSquare, faGithub} from '@fortawesome/free-brands-svg-icons';
import {faCode} from "@fortawesome/free-solid-svg-icons";

function Skills() {

    return (
        <div className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                <Title text={'Skills'}/>
                <div className={style.skills}>
                    <div>
                        <FontAwesomeIcon icon={faReact}/>
                        <div>React</div>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCode}/>
                        <div>HTML/CSS</div>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faJsSquare} />
                        <div>JavaScript</div>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faGithub} />
                        <div>GitHab</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
