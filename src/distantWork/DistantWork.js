import React from "react";

import style from "./DistantWork.module.scss";
import Button from "../common/components/button/Button";

function DistantWork() {
    return (
        <div className={style.distantWorkMain}>
            <div className={style.distantWork}>
                <h3 className={style.text}>I will consider <strong>remote work</strong> options</h3>
                <Button text='Hire me' href='https://t.me/Michael_Novickiy'/>
            </div>
        </div>
    );
}

export default DistantWork;
