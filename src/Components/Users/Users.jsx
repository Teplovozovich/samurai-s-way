import User from "./User/User";
import styles from "./Users.module.scss"
// import DialogItem from "./DialogItem/DialogItem";
// import Message from "./Message/Message";
import React from "react";

const Users = (props) => {
    return (
        <div className={styles.users}>
            {props.users.map(data => <User follow={data.follow} status={data.status} isFollowed={data.isFollowed} fullName={data.fullName}/>)}
        </div>
    )
}

export default Users;