import styles from "./ProfileInfo.module.scss"
import Preloader from "./../Common/Preloader/Preloader"
import ProfileStatus from "./ProfileStatus"


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={styles.profile__info}>
            <img className={styles.img} src="https://pic.rutubelist.ru/video/46/aa/46aaeeeed034cb74cef4bb100173d9df.jpg" />
            <div>
                {/* <img src={props.profile.photos.large} alt="" /> */}
                <ProfileStatus status={"g"}/>
            </div>
        </div>
    )
}

export default ProfileInfo;