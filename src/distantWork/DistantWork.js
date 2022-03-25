import React from "react";

import style from "./DistantWork.module.css";


function DistantWork() {
    return (
        <div className={style.distantWorkMain}>
            <div className={style.distantWork}>
                <div className={style.text}>I will consider remote work options</div>
                <div className={style.button}>Hire me</div>
            </div>
        </div>
    );
}

export default DistantWork;
