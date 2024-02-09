import React from "react";
import plugAvatar from "./../../../assets/img/png/plug-avatar.jpg"
import styles from "./User.module.scss"
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../../api/api";

const User = (props) => {
    return (
        <div className={styles.user}>
            <div className={styles.user_items}>
                <NavLink to={"/profile/" + props.id}>
                    <img src={props.photos.small ? props.photos.small : plugAvatar} alt="" />
                </NavLink>
                <span>{props.name}</span>
                <span>{props.status}</span>
                <span>{props.status}</span>
                {props.followed ?
                    <button disabled={props.followingInProgress.some(id => id === props.id)}
                        onClick={() => {
                            props.unfollow(props.id)
                        }}>unfollowe</button> :
                    <button disabled={props.followingInProgress.some(id => id === props.id)}
                        onClick={() => {
                            props.follow(props.id)
                        }}>follow</button>
                }
            </div>
        </div>
    )
}

export default User;