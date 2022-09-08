import React from "react";
import styles from "./DistantWork.module.scss";
import Button from "../common/components/Button/Button";


function DistantWork() {
    return (
        <div className={styles.distantWork}>
            <h3 className={styles.text}>I'm <strong className={styles.strong}>Open To</strong> Work </h3>
            <a href="mailto:novickiy.mikhail@gmail.com" target="_blank">
                <Button>Hire me</Button>
            </a>
        </div>
    );
}


export default DistantWork;
