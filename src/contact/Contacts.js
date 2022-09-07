import React from "react";

import style from "./Contacts.module.scss";
import Title from "../common/components/Title/Title";
import Button from "../common/components/Button/Button";

function Contacts() {
    return (
        <div className={style.contactsMain} id='contacts'>
            <div className={style.contacts}>
                <Title text={'Contacts'}/>
                <form className={style.form}>
                    <input type="text" placeholder="You Name"/>
                    <input type="text" placeholder="You Last Name"/>
                    <textarea placeholder="Message"/>
                    <Button type="submit">Send</Button>
                </form>
            </div>
        </div>
    );
}

export default Contacts;
