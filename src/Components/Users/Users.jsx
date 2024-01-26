import User from "./User/User";
import styles from "./Users.module.scss"
// import DialogItem from "./DialogItem/DialogItem";
// import Message from "./Message/Message";
import React from "react";

const Users = (props) => {
    let follows = (id) => {
        props.follow(id);
        console.log(props.isFollowed);
    }
    let unfollows = (id) => {
        props.unfollow(id);
        console.log(props.isFollowed);

    }

    return (
        <div className={styles.users}>
            {props.users.map(data => <User id={data.id} follow={follows} unfollow={unfollows} status={data.status} isFollowed={data.isFollowed} fullName={data.fullName} key={data.id} />)}
        </div>
    )
}

export default Users;