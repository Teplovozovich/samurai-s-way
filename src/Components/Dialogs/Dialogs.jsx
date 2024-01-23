import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.scss"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import { sendMessageCreator, updateNewMessageBodyCreator, } from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
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
                    <textarea
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder="Message..."
                    ></textarea>
                    <button onClick={onSendMessageClick}>send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;