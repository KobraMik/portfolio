import React from "react";

import style from "./Contacts.module.scss";
import Title from "../common/components/title/Title";

function Contacts() {
    return (
        <div className={style.contactsMain} id='contacts'>
            <div className={style.contacts}>
                <Title text={'Contacts'}/>
                <form className={style.form}>
                    <input type="text" placeholder="You Name"/>
                    <input type="text" placeholder="You Last Name"/>
                    <textarea placeholder="Message"/>
                    <button className={style.button} type="submit">Send message</button>
                </form>
            </div>
        </div>
    );
}

export default Contacts;
