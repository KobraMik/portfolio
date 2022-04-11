import React from "react";
import style from "./Projects.module.css"
import styleContainer from "../../src/common/styles/container.module.css"
import Project from "./Project/Project";


function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My works</h2>
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
