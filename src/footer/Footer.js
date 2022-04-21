import React from "react";
import style from "./Footer.module.scss";
import SocialNetwork from "./SotialNetwork/SoсialNetwork";
import gmailLogo from "../assets/image/gmail.png";
import linkedLogo from "../assets/image/linkedin.png";
import telegramLogo from "../assets/image/telegram.png";
import githubLogo from "../assets/image/github.png";

function Footer() {

    const linked = {
        backgroundImage: `url(${linkedLogo})`,
    };
    const gmail = {
        backgroundImage: `url(${gmailLogo})`,
    };
    const telegram = {
        backgroundImage: `url(${telegramLogo})`,
    };
    const github = {
        backgroundImage: `url(${githubLogo})`,
    };


    return (
        <div className={style.footerMain}>
            <div className={style.footer}>
                    <div className={style.textName}>
                        <p>Powered by Michael Novitckiy</p>
                    </div>
                    <div className={style.icons}>
                        <SocialNetwork image={linked} href={'https://www.linkedin.com/in/%D0%BC%D0%B8%D1%88%D0%B0-%D0%BD%D0%BE%D0%B2%D0%B8%D1%86%D0%BA%D0%B8%D0%B9-6325351a2/'}/>
                        <SocialNetwork image={gmail} href={'mailto:mishanovickiy91@gmail.com'}/>
                        <SocialNetwork image={telegram} href={'https://t.me/Michael_Novickiy'}/>
                        <SocialNetwork image={github} href={'https://github.com/MichaelNovickiy'}/>
                    </div>
                    <div className={style.rights}><p>
                        All rights reserved, 2022
                    </p></div>
                </div>
            </div>
    );
}

export default Footer;
