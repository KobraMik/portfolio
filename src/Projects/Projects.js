import React from "react";
import style from "./Projects.module.css"
import styleContainer from "../../src/common/styles/container.module.css"
import Project from "./Project/Project";
import Title from "../common/components/title/Title";


function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={'Projects'}/>
                <div className={style.projects}>
                    <Project title={"Social network"}
                             description={"Social networkSocial networkSocial networkSocial networkSocial networkSocial networkSocial networkSocial network"}/>
                    <Project title={"Todo list"}
                             description={"Todo listTodo listTodo listTodo listTodo listTodo "}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
