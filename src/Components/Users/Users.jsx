import Paginator from "../Common/Paginator/Paginator.tsx";
import User from "./User/User";
import styles from "./Users.module.scss"
import React from "react";

const Users = ({ users, totalUsersCount, pageSize, currentPage, onPageChanges, ...props }) => {
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
            <Paginator
                pageSize={pageSize}
                totalUsersCount={totalUsersCount}
                onPageChanges={onPageChanges}
                currentPage={currentPage} />
            {
                users.map(data =>
                    <User id={data.id}
                        follow={follows}
                        unfollow={unfollows}
                        status={data.status}
                        followed={data.followed}
                        name={data.name}
                        photos={data.photos}
                        followingInProgress={props.followingInProgress}
                        prodata={data}
                    />)
            }
        </div >
    )
}

export default Users;