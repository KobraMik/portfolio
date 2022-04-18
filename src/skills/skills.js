import React from "react";
import style from "./skills.module.scss"
import styleContainer from "../common/styles/container.module.css"
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";


function Skills() {

    const web = {
        backgroundImage: 'url("https://thumbs.dreamstime.com/b/go-to-web-sign-internet-icon-logo-white-background-go-to-web-sign-internet-icon-logo-137917300.jpg")',
    };
    const JS = {
        backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqMIl5xN5rLsOQ9_H3gO6sjKxNeqQIl8RJRQ&usqp=CAU")',
    };
    const react = {
        backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYMhM2R0ORpJpeyNY_OB0h6r48PuORYoJkFNhNuA58i5w5lXOfYpJ4cGna5YmorbmwB5g&usqp=CAU")',
    };

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={style.allSkills}>
                    <div className={style.skills}>
                        <Skill image={web}
                               title="WEB"
                               description="description1 desavcdsv sd vsd vsdv sdv sdv sdv sdv sdv sdv sdv sdvsdvsd"/>
                        <Skill image={JS}
                               title="JS"
                               description="оloremlorem loremloremloremlorem lorem lorem lorem lorem loremlorem lorem lorem lorem "/>
                        <Skill image={react}
                               title="REACT"
                               description="description3 lorem description4 lorem description4 lorem description4 lorem description4  lo "/>
                        <Skill
                            image={react}
                            title="REACT"
                            description="description3 lorem description4 lorem description4 lorem description4 lorem description4  lo "/>
                        <Skill
                            image={JS}
                            title="JS"
                            description="оloremlorem loremloremloremlorem lorem lorem lorem lorem loremlorem lorem lorem lorem "/>
                        <Skill image={web}
                               title="WEB"
                               description="description1 desavcdsv sd vsd vsdv sdv sdv sdv sdv sdv sdv sdv sdvsdvsd"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
