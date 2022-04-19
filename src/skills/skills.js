import React from "react";
import style from "./skills.module.scss"
import styleContainer from "../common/styles/container.module.css"
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import reduxImage from "../assets/image/redux.png";
import htmlImage from "../assets/image/html.png";
import cssImage from "../assets/image/css.png";
import jsImage from "../assets/image/js.png";
import tsImage from "../assets/image/ts.png";
import reactImage from "../assets/image/react.png";


function Skills() {

    const redux = {
        backgroundImage: `url(${reduxImage})`,
    };
    const JS = {
        backgroundImage: `url(${jsImage})`,
    };
    const TS = {
        backgroundImage: `url(${tsImage})`,
    };
    const html = {
        backgroundImage: `url(${htmlImage})`,
    };
    const css = {
        backgroundImage: `url(${cssImage})`,
    };
    const react = {
        backgroundImage: `url(${reactImage})`,
    };


    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={style.allSkills}>
                    <div className={style.skills}>
                        <Skill image={react}
                               title="react"
                        />
                        <Skill image={JS}
                               title="JS"/>
                        <Skill image={TS}
                               title="TS"
                        />
                        <Skill
                            image={html}
                            title="html"
                        />
                        <Skill
                            image={css}
                            title="css"
                        />
                        <Skill image={redux}
                               title="redux"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
