import React from "react";
import style from "./Footer.module.css";


function Footer() {
    return (
        <div className={style.footerMain}>
            <div className={style.footer}>
                <div className={style.textName}>Mikel Novi</div>
                <div className={style.icons}>
                    <div className={style.square}></div>
                    <div className={style.square}></div>
                    <div className={style.square}></div>
                    <div className={style.square}></div>
                </div>
                <div className={style.rights}>All rights reserved</div>
            </div>
        </div>
    );
}

export default Footer;
