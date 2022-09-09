import React, {useEffect, useState} from "react";
import style from "./Header.module.scss";
import {Link} from "react-scroll";
import {BurgerMenu} from "./BurgerMenu/BurgerMenu";

function Header() {

    const [showBigHeader, setShowBigHeader] = useState(window.matchMedia("(min-width: 620px)").matches)

    useEffect(() => {
        window
            .matchMedia("(min-width: 620px)")
            .addEventListener("change", e => setShowBigHeader(e.matches));
    }, []);


    return (
        <>
            {showBigHeader
                ?
                <div className={style.fix}>
                    <div className={style.header}>
                        <div className={style.navContainer}>
                            <Nav/>
                        </div>
                    </div>
                </div>
                :
                <BurgerMenu/>
            }
        </>
    );
}

export default Header;

function Nav() {
    return (
        <div className={style.nav}>
            <Link
                activeClass={style.link}
                to="main"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
            >Main</Link>
            <Link
                activeClass={style.link}
                to="aboutMe"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
            >About me</Link>
            <Link
                activeClass={style.link}
                to="projects"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
            >Projects</Link>
            <Link
                activeClass={style.link}
                to="contacts"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
            >Contacts</Link>
        </div>
    );
}
