import styles from "./Avatar.module.scss"

const Avatar = (props) => {
    return (
        <div className={styles.avatar}>
            <img src={props.src}/>
        </div>
    )
}

export default Avatar;