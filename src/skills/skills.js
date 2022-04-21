import React from "react";
import style from "./skills.module.scss"
import Title from "../common/components/title/Title";
import Skill from "./skill/Skill";
import htmlImage from "../assets/image/html.png";
import cssImage from "../assets/image/css.png";
import jsImage from "../assets/image/js.png";
import tsImage from "../assets/image/ts.png";
import reactImage from "../assets/image/react.png";

function Skills() {

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
            <div className={style.skillsContainer}>
                <Title text={'Skills'}/>
                <div className={style.skills}>
                    <Skill image={react} title="react"/>
                    <Skill image={JS} title="JavaScript"/>
                    <Skill image={TS} title="TypeScript"/>
                    <Skill image={html} title="html"/>
                    <Skill image={css} title="css"/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
