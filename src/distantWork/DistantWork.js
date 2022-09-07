import React from "react";
import style from "./DistantWork.module.scss";
import Button from "../common/components/Button/Button";


function DistantWork() {


    return (
        <div className={style.distantWorkMain}>
            <div className={style.distantWork}>
                <h3 className={style.text}>I will consider <strong>remote work</strong> options</h3>
                <a href="https://t.me/Michael_Novickiy" target="_blank">
                    <Button>Hire me</Button>
                </a>
            </div>
        </div>
    );
}


export default DistantWork;
