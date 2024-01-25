import React from "react";
import styles from "./User.module.scss"

const User = (props) => {
    return (
        <div className={styles.user}>
            <span>{props.fullName}</span>
            <span>{props.status}</span>
            {props.isFollowed ?
                <button onClick={() => { props.follow(props.id) }}>unfollowe</button> :
                <button onClick={() => { props.unfollow(props.id) }}>followe</button>
            }
        </div>
    )
}

export default User;