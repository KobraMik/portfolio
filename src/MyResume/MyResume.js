import React from "react"
import s from "./MyResume.module.sass"
import {CoursesBlock} from "./Blocks/CoursesBlock"
import styles from "./sassCommon/commonStyles.module.sass"
import {v1} from "uuid"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBook, faFolderOpen, faInfo} from "@fortawesome/free-solid-svg-icons"
import {ExperiencesBlock} from "./Blocks/ExperiencesBlock"
import {EducationBlock} from "./Blocks/EducationBlock"
import Title from "../common/components/Title/Title";

export const MyResume = () => {
    const state = {
        education: [
            {
                id: v1(),
                companyName: ("BNTU"),
                faculty: ("Transport Communications"),
                specialization: ("construction of highways"),
                from: 2015,
                to: 2020,
                description: ""
            }
        ],
        experiences: [
            {
                id: v1(),
                position: ("Surveyor engineer"),
                companyName: ("UE 'MINSKMETROSTROY'"),
                from: "05.2020",
                to: ("06.2021"),
                description: ("Execution of a complex of geodetic works during the construction of the Minsk metro"),
            },
            {
                id: v1(),
                position: ("Safety engineer"),
                companyName: ("UE 'MINSKMETROSTROY'"),
                from: "06.2021",
                to: "09.2022",
                description: ("Monitoring the state of labor protection in the organization. Development of action plans, administrative documents, prevention of occupational injuries."),
            }
        ],
        courses: [
            {
                id: v1(),
                position: ("BASIC OF COMPUTER SCIENCE"),
                companyName: ("IT-ACADEMY"),
                from: "01.2020",
                to: "02.2020",
                description: (" Solving simple algorithmic tasks using python"),
            },
            {
                id: v1(),
                position: ("Frontend-developer"),
                companyName: ("IT-Incubator"),
                from: "11.2021",
                to: "06.2022",
                description: ("HTML, CSS, JavaScript, React/Redux, TypeScript, RestAPI..."),
            },
            {
                id: v1(),
                position: ("React - The Complete Guide (incl Hooks, React Router, Redux)"),
                companyName: ("Udemy.com"),
                from: "06.2022",
                to: "09.2022",
                description: ("Learning Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!"),
            },
        ]
    }
    const eduElements = state.education.map(edu => <EducationBlock key={edu.id} edu={edu}/>)
    const expElements = state.experiences.map(exp => <ExperiencesBlock key={exp.id} exp={exp}/>)
    const courcesElements = state.courses.map(course => <CoursesBlock key={course.id} course={course}/>)
    return (
        <div className={styles.blockName} data-aos="fade-in" id="resume">
            <div className={styles.container}>
                <div className={styles.blockTitle}>
                    <Title text={"My resume"}/>
                </div>
                <div className={s.resume}>
                    <div className={s.timeLine}>
                        <div>
                            <Category elements={eduElements} title={"Education"} icon={faBook}/>
                        </div>
                        <div>
                            <Category elements={expElements} title={"Experiences"} icon={faFolderOpen}/>
                        </div>
                        <div>
                            <Category elements={courcesElements} title={"Courses"} icon={faInfo}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Category = (props) => {
    return (
        <>
            <div className={s.category}>
                <span>{props.title}</span>
            </div>
            <div className={s.contentBlocks}>
                {props.elements}
                <div className={`${s.folder} ${props.icon === faFolderOpen && s.expFolder} || ${props.icon === faBook &&
                s.eduFolder} || ${props.icon === faInfo && s.courcesFolder}`}>
                    <FontAwesomeIcon icon={props.icon}/>
                </div>
            </div>
        </>
    )
}