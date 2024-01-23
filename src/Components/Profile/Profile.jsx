import ProfileInfo from "../ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import styles from "./Profile.module.scss"

const Profile = (props) => {
    return (
        <div className={styles.profile__wrapper}>
            <ProfileInfo />
            <MyPostsContainer store={props.store} />
        </div>
    )
}

export default Profile;