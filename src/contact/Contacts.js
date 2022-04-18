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
                    <label>First:</label> <input type="text" placeholder="You Name"/>
                    <label>Last:</label> <input type="text" placeholder="You Last Name"/>
                    <textarea></textarea>
                </form>
                <Button text='Send message'/>
            </div>
        </div>
    );
}

export default Contacts;
