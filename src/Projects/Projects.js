import React from "react";
import style from "./Projects.module.css"
import styleContainer from "../../src/common/styles/container.module.css"
import Project from "./Project/Project";
import Title from "../common/components/title/Title";


function Projects() {

    const socialNetwork = {
        backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy1nyLcMb-2Ia0NPxRmvnIYuqsKGJUA-pYVA&usqp=CAU")',
    };

    const todoList = {
        backgroundImage: 'url("https://balancethroughsimplicity.com/wp-content/uploads/2020/04/How-to-write-a-To-Do-list-to-get-things-done-BLOG-1.jpg")',
    }

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={'Projects'}/>
                <div className={style.projectsMain}>
                    <Project style={socialNetwork}
                             title={"Social network"}
                             description={"Social networkSocial networkSocial networkSocial networkSocial networkSocial networkSocial networkSocial network"}/>
                    <Project style={todoList}
                             title={"Todo list"}
                             description={"Todo listTodo listTodo listTodo listTodo listTodo "}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
