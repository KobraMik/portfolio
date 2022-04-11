import React from "react";

import style from "./DistantWork.module.css";
import styleContainer from "../common/styles/container.module.css";


function DistantWork() {
    return (
        <div className={style.distantWorkMain}>
            <div className={`${styleContainer.container} ${style.distantWork}`}>
                <h2 className={style.text}>I will consider remote work options</h2>
                <div className={style.button}>Hire me</div>
            </div>
        </div>
    );
}

export default DistantWork;
