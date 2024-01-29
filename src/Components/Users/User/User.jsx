import React from "react";
import plugAvatar from "./../../../assets/img/png/plug-avatar.jpg"
import styles from "./User.module.scss"

const User = (props) => {
    return (
        <div className={styles.user}>
            <div className={styles.user_items}>
                <img src={props.photos.small ? props.photos.small : plugAvatar} alt="" />
                <span>{props.name}</span>
                <span>{props.status}</span>
                <span>{props.status}</span>
                {props.followed ?
                    <button onClick={() => { props.unfollow(props.id) }}>unfollowe</button> :
                    <button onClick={() => { props.follow(props.id) }}>follow</button>
                }
            </div>
        </div>
    )
}

export default User;