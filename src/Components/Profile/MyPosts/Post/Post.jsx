import Avatar from "../../../Avatar/Avatar";
import styles from "./Post.module.scss"

const Post = (props) => {
    return (
        <div className={styles.post__wrapper}>
            <div className={styles.post}>
                <img className={styles.img} src="https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663618522_9-mykaleidoscope-ru-p-veselaya-svinka-krasivo-9.jpg" alt="" />
                <div>{props.message}</div>
            </div>
            <div className={styles.like__btn}>
                <button>like: {props.likeCount}</button>
            </div>
        </div>
    )
}

export default Post;