import React from "react"
import s from "./MyResume.module.sass"
import {CoursesBlock} from "./Blocks/CoursesBlock"
import styles from "./sassCommon/commonStyles.module.sass"
import {v1} from "uuid"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBook, faBookmark, faFolderOpen, faInfo} from "@fortawesome/free-solid-svg-icons"
import {ExperiencesBlock} from "./Blocks/ExperiencesBlock"
import {EducationBlock} from "./Blocks/EducationBlock"
import Title from "../common/components/Title/Title";

export const MyResume = (props) => {
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
                description: (""),
            },
            {
                id: v1(),
                position: ("Safety engineer"),
                companyName: ("UE 'MINSKMETROSTROY'"),
                from: "06.2021",
                to: "09.2022",
                description: (""),
            }
        ],
        courses: [
            {
                id: v1(),
                position: ("it-icubator"),
                companyName: ("sdvsdvs"),
                from: "09.2012",
                to: "11.2012",
                description: ("myResume.courses.course8.description"),
            },
            {
                id: v1(),
                position: ("myResume.courses.course9.position"),
                companyName: ("PSU"),
                from: "01.2010",
                to: "03.2010",
                description: ("myResume.courses.course9.description"),
            },
            {
                id: v1(),
                position: ("myResume.courses.course10.position"),
                companyName: ("PSU"),
                from: "08.2009",
                to: "10.2009",
                description: ("myResume.courses.course10.description"),
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
                    <Title text={'My resume'}/>
                    {/*<span className={styles.border}> </span>*/}
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

                        <div className={s.categoryEndIcon}>
                            <FontAwesomeIcon icon={faBookmark}/>
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
                s.eduFolder} || ${props.icon === faInfo}`}>
                    <FontAwesomeIcon icon={props.icon}/>
                </div>
            </div>
        </>
    )
}