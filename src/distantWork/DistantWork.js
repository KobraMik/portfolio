import React from "react";

import style from "./DistantWork.module.scss";
import styleContainer from "../common/styles/container.module.css";
import Button from "../common/components/button/Button";


function DistantWork() {
    return (
        <div className={style.distantWorkMain}>
            <div className={`${styleContainer.container} ${style.distantWork}`}>
                <h3 className={style.text}>I will consider <strong>remote work</strong> options</h3>
                <Button text='Hire me'/>
            </div>
        </div>
    );
}

export default DistantWork;
