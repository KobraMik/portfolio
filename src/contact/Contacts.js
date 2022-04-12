import React from "react";

import style from "./Contacts.module.css";
import Title from "../common/components/title/Title";


function Contacts() {
    return (
        <div className={style.contactsMain}>
            <div className={style.contacts}>
                <Title text={'Contacts'}/>
                <form className={style.form}>
                    <label>First:</label> <input type="text"/>
                    <label>Last:</label> <input type="text"/>
                    <textarea></textarea>
                </form>
                <div className={style.buttonSend}>Send message</div>
            </div>
        </div>
    );
}

export default Contacts;
