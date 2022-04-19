import React from "react";

import style from "./Contacts.module.scss";
import styleContainer from "../common/styles/container.module.css";
import Title from "../common/components/title/Title";
import Button from "../common/components/button/Button";


function Contacts() {
    return (
        <div className={style.contactsMain}>
            <div className={`${style.contacts} ${styleContainer.container}`}>
                <Title text={'Contacts'}/>
                <form className={style.form}>
                    <label>First:</label> <input type="text" placeholder="You Name"/>
                    <label>Last:</label> <input type="text" placeholder="You Last Name"/>
                    <textarea></textarea>
                </form>
                <div className={style.button}>
                    <Button text='Send message'/>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
