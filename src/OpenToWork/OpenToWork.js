import React from "react";
import styles from "./OpenToWork.module.scss";
import Button from "../Common/components/Button/Button";


function OpenToWork() {
    return (
        <div className={styles.openToWork}>
            <h3 className={styles.text}>I'm <strong className={styles.strong}>Open To</strong> Work </h3>
            <a href="mailto:novickiy.mikhail@gmail.com" target="_blank">
                <Button>Hire me</Button>
            </a>
        </div>
    );
}


export default OpenToWork;
