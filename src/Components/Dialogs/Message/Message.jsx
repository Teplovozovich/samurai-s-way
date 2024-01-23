import React from "react";
import styles from "./Message.module.scss"

const Message = (props) => {
    return (
        <div className={styles.message}>
            <img src="https://www.emojiall.com/en/svg-to-png/twitter/1920/1f437.png" alt="" />
            {props.message}
        </div>
    )
}

export default Message;