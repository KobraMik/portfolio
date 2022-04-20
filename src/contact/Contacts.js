import React from "react";

import style from "./Contacts.module.scss";
import Title from "../common/components/title/Title";
import Button from "../common/components/button/Button";


function Contacts() {
    return (
        <div className={style.contactsMain}>
            <div className={style.contacts}>
                <Title text={'Contacts'}/>
                <form className={style.form}>
                    <label></label> <input type="text" placeholder="You Name"/>
                    <label></label> <input type="text" placeholder="You Last Name"/>
                    <textarea placeholder="Message"></textarea>
                </form>
                <div className={style.button}>
                    <Button text='Send message'/>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
