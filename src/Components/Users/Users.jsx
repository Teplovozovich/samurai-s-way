import User from "./User/User";
import styles from "./Users.module.scss"
// import DialogItem from "./DialogItem/DialogItem";
// import Message from "./Message/Message";
import React from "react";

const Users = (props) => {
    const follows = (id) => {
        props.follow(id);
    }
    const unfollows = (id) => {
        props.unfollow(id);
    }

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return (
        <div className={styles.users}>
            <div>
                {pages.map(data => {
                    return (
                        <span
                            className={props.currentPage === data && styles.selectedPage}
                            onClick={(e) => { props.onPageChanges(data) }}>
                            {data}
                        </span>)
                })}
            </div>
            {
                props.users.map(data =>
                    <User id={data.id}
                        follow={follows}
                        unfollow={unfollows}
                        status={data.status}
                        followed={data.followed}
                        name={data.name}
                        photos={data.photos}
                        followingInProgress={props.followingInProgress}
                        toggleFollowingInProgress={props.toggleFollowingInProgress}
                        prodata={data}
                    />)
            }
        </div >
    )
}

export default Users;