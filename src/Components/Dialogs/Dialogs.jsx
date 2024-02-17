import styles from "./Dialogs.module.scss"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import { Navigate } from "react-router-dom";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import AddMessageForm from "./AddMessageForm/AddMessageForm";


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let addNewMessage = (values) => {
        console.log(values);
        props.sendMessage(values.newMessageBody);
    }

    let DialogElement = state.dialogs.map(data =>
        <DialogItem
            className={styles.dialogs__item}
            name={data.name}
            id={data.id}
        />)

    let MessageElement = state.messages.map((data) =>
        <Message message={data.message} />
    )

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs__items}>
                {DialogElement}
            </div>
            <div className={styles.messages}>
                <div>{MessageElement}</div>
                <div className={styles.input_area}>
                    <AddMessageForm onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    )
}
export default Dialogs;