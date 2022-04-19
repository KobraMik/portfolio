import React from "react";
import style from "./Footer.module.scss";
import SocialNetwork from "./SotialNetwork/SoсialNetwork";
import styleContainer from "../common/styles/container.module.css";


function Footer() {

    const linked = {
        backgroundImage: 'url("https://w7.pngwing.com/pngs/913/13/png-transparent-computer-icons-social-media-linkedin-circle-plus-payments-inc-linkedin-text-trademark-logo-thumbnail.png")',
    };
    const gmail = {
        backgroundImage: 'url("https://w7.pngwing.com/pngs/779/934/png-transparent-gmail-notifier-computer-icons-email-google-gmail-angle-white-text-thumbnail.png")',
    };
    const telegram = {
        backgroundImage: 'url("https://w7.pngwing.com/pngs/825/283/png-transparent-telegram-computer-icons-initial-coin-offering-telegram-icon-angle-triangle-instant-messaging-thumbnail.png")',
    };
    const git = {
        backgroundImage: 'url("https://w7.pngwing.com/pngs/684/454/png-transparent-github-computer-icons-github-logo-black-silhouette-thumbnail.png")',
    };


    return (
        <div className={style.footerMain}>
            <div className={`${style.footer} ${styleContainer.container}`}>
                <div className={style.textName}>
                    <p>Powered by Michael Novitckiy</p>
                </div>
                <div className={style.icons}>
                    <SocialNetwork image={linked} href={'https://www.linkedin.com/in/%D0%BC%D0%B8%D1%88%D0%B0-%D0%BD%D0%BE%D0%B2%D0%B8%D1%86%D0%BA%D0%B8%D0%B9-6325351a2/'}/>
                    <SocialNetwork image={gmail}/>
                    <SocialNetwork image={telegram} href={'https://web.telegram.org/z/'}/>
                    <SocialNetwork image={git} href={'https://github.com/MichaelNovickiy'}/>
                </div>
                <div className={style.rights}><p>
                    All rights reserved
                </p></div>
            </div>
        </div>
    );
}

export default Footer;
