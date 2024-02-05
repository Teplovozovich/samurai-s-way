import React from "react";
import plugAvatar from "./../../../assets/img/png/plug-avatar.jpg"
import styles from "./User.module.scss"
import { NavLink } from "react-router-dom";
import axios from "axios";

const User = (props) => {
    //console.log(props);
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
                    <button disabled={props.followingInProgress.some(id => id === props.id)} onClick={() => {
                        props.toggleFollowingInProgress(true);
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
                            withCredentials: true,
                            headers:
                                { "API-KEY": "47a4de4d-f9e1-42ec-9f81-be1bd7c423db" }
                        })
                            .then(response => {
                                if (response.data.resultCode === 0) {
                                    props.unfollow(props.id)
                                }
                                props.toggleFollowingInProgress(false);
                            })


                    }}>unfollowe</button> :
                    <button disabled={props.followingInProgress.some(id => id === props.id)} onClick={() => {
                        props.toggleFollowingInProgress(false);
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {
                            withCredentials: true,
                            headers:
                                { "API-KEY": "47a4de4d-f9e1-42ec-9f81-be1bd7c423db" }
                        })
                            .then(response => {
                                if (response.data.resultCode === 0) {
                                    props.follow(props.id)
                                }
                                props.toggleFollowingInProgress(true);
                            })


                    }}>follow</button>
                }
            </div>
        </div>
    )
}

export default User;