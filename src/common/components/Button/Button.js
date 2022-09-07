import React from 'react'
import styles from './Button.module.scss'

const Button = (props) => {
    const button = <button
        className={`${styles.button} ${props.className}`}
        type={props.type || 'button'}
        onClick={props.onClick}
    >
        {props.children}
    </button>

    return (
        <>{button}</>
    );
};

export default Button;