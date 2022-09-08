import React from "react";
import styles from "./Footer.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";

function Footer() {
    return (
        <div className={styles.footerMain}>
            <div className={styles.footer}>
                <div className={styles.textName}>
                    <p>Powered by Michael Novitckiy</p>
                </div>
                <div className={styles.icons}>
                    <a href="https://www.linkedin.com/in/michaelnovickiy/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin}
                                         className={styles.icon}/>
                    </a>
                    <a href="mailto:novickiy.mikhail@gmail.com" target="_blank">
                        <FontAwesomeIcon icon={faEnvelope}
                                         className={styles.icon}/>
                    </a>
                    <a href="https://t.me/Michael_Novickiy" target="_blank">
                        <FontAwesomeIcon icon={faTelegram}
                                         className={styles.icon}/>
                    </a>
                    <a href="https://github.com/MichaelNovickiy" target="_blank">
                        <FontAwesomeIcon icon={faGithub}
                                         className={styles.icon}/>
                    </a>
                </div>
                <div className={styles.rights}><p>
                    All rights reserved, 2022
                </p></div>
            </div>
        </div>
    );
}

export default Footer;
