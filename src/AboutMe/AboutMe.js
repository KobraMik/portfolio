import React from 'react';
import styles from './AboutMe.module.scss'
import Title from "../Common/components/Title/Title";
import Button from "../Common/components/Button/Button";
import pdf from '../assets/CV/MikhailnNavitski.pdf'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-regular-svg-icons/faEye";

const AboutMe = () => {

    const viewCVBtn = () => {
        window.open(pdf, '_blank');
    }

    return (
        <div className={styles.aboutMeBlock} id="aboutMe">
            <div className={styles.aboutMeContainer}>
                <Title text={'About me'}/>
                <div className={styles.text}>
                    Front-end (react) developer – that is what I have been going with, step by step, for the last
                    1,5
                    years. Reading technical documentation, programming, testing and investigating someone else’s
                    code,
                    learning English and much more became my daily routine. It wasn't easy, but nevertheless, it
                    inspires me
                    and I am always up for new challenges.
                </div>
                <div className={styles.aboutMe}>
                    <div className={styles.info}>
                        <div><strong>Phone</strong> +375 33 618-47-00</div>
                        <div><strong>Email</strong> novickiy.mikhail@gmail.com</div>
                        <div><strong>Address</strong> Minsk, Belarus</div>
                    </div>
                    <div onClick={viewCVBtn}>
                        <Button>
                            <FontAwesomeIcon icon={faEye} style={{marginRight: '5px'}}/>
                            View CV
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;