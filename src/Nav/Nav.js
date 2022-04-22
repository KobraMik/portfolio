import React from "react";
import style from './Nav.module.scss';
import {Link, animateScroll as scroll} from "react-scroll";

function Nav() {
    return (
        <div className={style.nav}>
            <Link
                activeClass={style.link}
                to="main"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >main</Link>
            <Link
                activeClass={style.link}
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >skills</Link>
            <Link
                activeClass={style.link}
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >projects</Link>
            <Link
                activeClass={style.link}
                to="contacts"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >contacts</Link>
        </div>
    );
}

export default Nav;
