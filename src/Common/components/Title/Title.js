import React from "react";
import styles from "./Title.module.scss"


function Title(props) {
    return (
        <div className={styles.title}>
            <h2>{props.text}</h2>
            <span className={styles.border}> </span>
        </div>
    )
}

export default Title;
