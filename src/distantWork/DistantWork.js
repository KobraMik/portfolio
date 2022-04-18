import React from "react";

import style from "./DistantWork.module.scss";
import styleContainer from "../common/styles/container.module.css";


function DistantWork() {
    return (
        <div className={style.distantWorkMain}>
            <div className={`${styleContainer.container} ${style.distantWork}`}>
                <h3 className={style.text}>I will consider <strong>remote work</strong> options</h3>
                <div className={style.button}>Hire me</div>
            </div>
        </div>
    );
}

export default DistantWork;
