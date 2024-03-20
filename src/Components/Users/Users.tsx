import Paginator from "../Common/Paginator/Paginator.tsx";
import User from "./User/User.jsx";
import styles from "./Users.module.scss"
import React from "react";
import cn from "classnames"
import { UserType } from "../../types/types.ts";
import { Formik } from "formik";

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
                currentPage={currentPage} />
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

const UsersSearchForm = () => {
    return (
        <div>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        //errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        //errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {errors.email && touched.email && errors.email}
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        {errors.password && touched.password && errors.password}
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>

        </div>
    )
}

export default Users;