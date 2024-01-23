import styles from "./ProfileInfo.module.scss"



const ProfileInfo = () => {
    return (
        <div className={styles.profile__info}>
                <img className={styles.img} src="https://pic.rutubelist.ru/video/46/aa/46aaeeeed034cb74cef4bb100173d9df.jpg" />
                <div>
                    ava + description
                </div>
        </div>
    )
}

export default ProfileInfo;