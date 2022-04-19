import React from "react";
import style from "./SoсialNetwork.module.scss";


function SocialNetwork(props) {

    return (
        <a href={props.href} target="_blank" className={style.SocialNetwork} style={props.image}></a>
    );
}

export default SocialNetwork;
