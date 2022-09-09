import s from "./BurgerMenu.module.sass"
import React, {useState} from "react"
import {Link} from "react-scroll"

export const BurgerMenu = () => {
    const [status, setStatus] = useState(false)
    return (

        <div className={s.wrapper}>
            {!status &&
            <div className={s.menu} onClick={() => setStatus(!status)}>
                <div className={s.menuLine}></div>
                <div className={s.menuLine}></div>
                <div className={s.menuLine}></div>
            </div>
            }
            {status &&
            <div className={s.menuBlock}>
                <div className={s.menuTitle} onClick={() => setStatus(!status)}>
                    <div>menu</div>
                    <div>X</div>
                </div>
                <div className={s.menuItems}>
                    <ul>
                        <li><Link href="#" to="main" smooth={true} duration={1000}>{"Main"}</Link></li>
                        <li><Link href="#" to="aboutMe" smooth={true} duration={1000}>{"About me"}</Link></li>
                        <li><Link href="#" to="projects" smooth={true} duration={1000}>{"Projects"}</Link></li>
                        <li><Link href="#" to="contacts" smooth={true} duration={1000}>{"Contacts"}</Link></li>

                    </ul>
                </div>

            </div>
            }
        </div>
    )
}