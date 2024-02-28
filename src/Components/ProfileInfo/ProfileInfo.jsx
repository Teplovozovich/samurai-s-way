import styles from "./ProfileInfo.module.scss"
import Preloader from "./../Common/Preloader/Preloader"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"
import userPhoto from "../../assets/img/png/plug-avatar.jpg"


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={styles.profile__info}>
            <img className={styles.img} src="https://pic.rutubelist.ru/video/46/aa/46aaeeeed034cb74cef4bb100173d9df.jpg" />
            <div>
                <img src={props.profile.photos.large || userPhoto} alt="avatar" className={styles.main_photo} />
                {props.isOwner &&
                    <input type="file"
                        onChange={onMainPhotoSelected} />
                }
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;