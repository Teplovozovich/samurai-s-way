import Paginator from "../Common/Paginator/Paginator.tsx";
import User from "./User/User.jsx";
import styles from "./Users.module.scss"
import React from "react";
import cn from "classnames"
import { UserType } from "../../types/types.ts";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanges: (pageNumber: number) => void
    users: Array<UserType>
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

let Users: React.FC<PropsType> = ({ users, totalUsersCount, pageSize, currentPage, onPageChanges,
    ...props }) => {
    let pageCount: number = Math.ceil(totalUsersCount / pageSize)

    let pages: number[] = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return (
        <div className={styles.users}>
            <Paginator
                pageSize={pageSize}
                totalUsersCount={totalUsersCount}
                onPageChanges={onPageChanges}
                currentPage={currentPage} /  >
            {
                users.map(data =>
                    <User id={data.id}
                        follow={props.follow}
                        unfollow={props.unfollow}
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