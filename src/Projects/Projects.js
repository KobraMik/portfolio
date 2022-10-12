import React from "react";
import styles from "./Projects.module.scss"
import Title from "../Common/components/Title/Title";
import socialNetworkImg from "../assets/image/socialNetwork.jpg"
import todoListImg from "../assets/image/Todolist.png"
import sneakersMarketImg from "../assets/image/sneakersMarket.png"
import onlineZoo from "../assets/image/onlineZoo.png"

const projectsArr = [
    {
        id: 1,
        title: "Social network",
        href: "https://github.com/MichaelNovickiy/wayofthesamurai",
        img: socialNetworkImg,
        description: 'React, Redux, JavaScript/Typescript, RestAPI, HTML/CSS, functional and classes components, hooks, connect, HOC'
    },
    {
        id: 2,
        title: "Todo list",
        href: "https://github.com/MichaelNovickiy/todolistAgain.git",
        img: todoListImg,
        description: 'React, Redux, TypeScript, TDD (Jest, Snapshot testing, Storybook), RestAPI, MaterialUI, HTML/CSS, functional components, hooks'
    },
    {
        id: 3,
        title: "Sneakers market",
        href: "https://github.com/MichaelNovickiy/sneakers-market",
        img: sneakersMarketImg,
        description: 'HTML/SCSS, React, React-Context, JavaScript, hooks'
    },
    {
        id: 4,
        title: "Online Zoo",
        href: "https://rolling-scopes-school.github.io/michaelnovickiy-JSFE2022Q3/ONLINE-ZOO/pages/main/index.html",
        img: onlineZoo,
        description: 'HTML, SCSS, pixel perfect, BEM, mobile adaptability'
    },
]


function Projects() {
    return (
        <div className={styles.projectsBlock} id="projects">
            <div className={styles.projectsContainer}>
                <Title text={"Projects"}/>
                <div className={styles.projects}>
                    {projectsArr.map((project) => {
                        return (<Project key={project.id}
                                         title={project.title}
                                         href={project.href}
                                         img={project.img}
                                         description={project.description}
                        />)
                    })}
                </div>
            </div>
        </div>
    );
}

export default Projects;

const Project = ({title, href, img, description}) => {
    return (
        <div className={styles.project}>
            <a className={styles.image}
               style={{backgroundImage: "url(" + img + ")"}}
               href={href}
               target="_blank"
            >
            </a>
            <h3>{title}</h3>
            <div className={styles.description}>
                <p>{description}</p>
            </div>
        </div>
    );
};