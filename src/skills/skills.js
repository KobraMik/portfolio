import React from "react";
import styles from "./skills.module.scss"
import Title from "../common/components/Title/Title";
import {faReact, faJs, faGithub, faHtml5, faCss3Alt} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import redux from "../assets/image/redux.svg"
import typescript from "../assets/image/typescript.svg"
import Fade from 'react-reveal/Fade';

function Skills() {
    return (
        <div className={styles.skillsBlock} id="skills">
            <Title text={"Skills"}/>
            <div className={styles.skillsContainer}>
                <div className={styles.skills}>
                    <Fade left cascade>
                        <div className={styles.skill}><FontAwesomeIcon icon={faHtml5} className={styles.icon}
                                                                       size={100}/>HTML
                        </div>
                    </Fade>
                    <Fade left cascade>
                        <div className={styles.skill}><FontAwesomeIcon icon={faCss3Alt} className={styles.icon}/>CSS/SCSS
                        </div>
                    </Fade>
                    <Fade left cascade>
                        <div className={styles.skill}><FontAwesomeIcon icon={faReact} className={styles.icon}/>React
                        </div>
                    </Fade>
                    <Fade left cascade>
                        <div className={styles.skill}><img src={redux} alt="redux" className={styles.iconImg}/>Redux
                        </div>
                    </Fade>
                    <Fade left cascade>
                        <div className={styles.skill}><FontAwesomeIcon icon={faJs} className={styles.icon}/>Javascript
                        </div>
                    </Fade>
                    <Fade left cascade>
                        <div className={styles.skill}><img src={typescript} alt="ts" className={styles.iconImg}/>Typescript
                        </div>
                    </Fade>
                    <Fade left cascade>
                        <div className={styles.skill}><FontAwesomeIcon icon={faGithub} className={styles.icon}/>Git/Github
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default Skills;

