import React from "react";
import style from './Header.module.css';
import Nav from "../Nav/Nav";
import styleContainer from "../common/styles/container.module.css";

function Header() {
    return (
        <div className={style.header}>
           <div className={style.navContainer}> <Nav/></div>
        </div>
    );
}

export default Header;
