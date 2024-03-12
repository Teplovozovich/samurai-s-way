import React from "react";
import { connect } from "react-redux";
import Users from "./Users.tsx";
import { requestUsers, follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow, toggleFollowingProgress } from "../../redux/users-reducer.ts";
import Preloader from "../Common/Preloader/Preloader.jsx";
import { usersAPI } from "../../api/api.js"
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect.js";
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from "../../redux/users-selectors.js";
import { UserType } from "../../types/types.ts";

type PropsType = {
    currentPage: number
    pageSize: number
    totalUsersCount: number
    isFetching: boolean
    users: Array<UserType>

    getUsers: (currentPage: number, pageSize: number) => void
    follow: () => void
    unfollow: () => void
    followingInProgress: Array<number>
    setCurrentPage: (pageNumber: number) => void
}

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanges = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber)
    }

    render() {
        let pageCount: number = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages: Array<number> = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }

        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanges={this.onPageChanges}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    // toggleFollowingProgress={this.props.toggleFollowingProgress}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),

    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
        toggleFollowingProgress,
        getUsers: requestUsers
    })
)(UsersContainer)

