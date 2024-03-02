import styles from "./ProfileInfo.module.scss"
import Preloader from "../../Common/Preloader/Preloader"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"
import userPhoto from "../../../assets/img/png/plug-avatar.jpg"
import { useState } from "react"
import ProfileDataFormReduxForm from "./ProfileDataForm"


const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

    let [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (
        <div className={styles.profile__info}>
            <img className={styles.img} src="https://pic.rutubelist.ru/video/46/aa/46aaeeeed034cb74cef4bb100173d9df.jpg" />
            <div>
                <img src={profile.photos.large || userPhoto} alt="avatar" className={styles.main_photo} />
                {isOwner &&
                    <input type="file"
                        onChange={onMainPhotoSelected} />
                }
                {editMode
                    ? <ProfileDataFormReduxForm initialValues={profile} onSubmit={onSubmit} profile={profile} />
                    : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />
                }

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return (
        <div>
            <div>
                {isOwner &&
                    <div>
                        <button onClick={goToEditMode}>edit</button>
                    </div>
                }
            </div>
            <div>
                Full name: {profile.fullName}
            </div>
            <div>
                Looking for a job: {profile.lookingForAJob ? "yes" : "no"}
            </div>
            <div>
                My professional skills: {profile.lookingForAJobDescription ? "yes" : "no"}
            </div>
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                })}
            </div>

        </div>
    )
}


const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div>
            {contactTitle} : {contactValue}
        </div>
    )
}

export default ProfileInfo;