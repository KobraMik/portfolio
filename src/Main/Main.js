import React from "react";
import style from './Main.module.css';
import styleContainer from '../common/styles/container.module.css'


function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.mainText}>
                    <span>Hi There</span>
                    <h2>I am Mikel Novi</h2>
                    <p>Frontend developer</p>
                </div>
                <div className={style.photo}>
                    Photo
                </div>
            </div>
        </div>
    );
}

export default Main;
