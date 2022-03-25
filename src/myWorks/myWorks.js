import React from "react";
import style from "./myWorks.module.css"


function MyWorks() {
    return (
        <div className={style.myWorksBlockMain}>
            <div className={style.myWorksBlockBody}>
                <div className={style.myWorksTitle}>My works</div>
                <div className={style.myWorksBlock}>
                    <div className={style.block}>
                        <div className={style.image}>
                            Image
                            <div className={style.buttonWatch}>Watch</div>
                        </div>
                        <div className={style.projectName}>Project name</div>
                        <div className={style.description}>short description</div>
                    </div>
                    <div className={style.block}>
                        <div className={style.image}>
                            Image
                            <div className={style.buttonWatch}>Watch</div>
                        </div>
                        <div className={style.projectName}>Project name</div>
                        <div className={style.description}>short description</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyWorks;
