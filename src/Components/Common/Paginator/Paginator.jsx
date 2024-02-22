import User from "../../Users/User/User";
import styles from "./Paginator.module.scss"
// import DialogItem from "./DialogItem/DialogItem";
// import Message from "./Message/Message";
import React from "react";

const Paginator = (props) => {
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
        <div>
            {pages.map(data => {
                return (
                    <span
                        className={props.currentPage === data && styles.selectedPage}
                        onClick={(e) => { props.onPageChanges(data) }}>
                        {data}
                    </span>)
            })}
        </div >
    )
}

export default Paginator;