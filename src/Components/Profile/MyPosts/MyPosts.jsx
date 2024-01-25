import Post from "./Post/Post";
import styles from "./MyPosts.module.scss"
import React from "react";

const MyPosts = (props) => {
    let postElements = props.profilePage.posts.map(data => <Post message={data.post} likeCount={data.likeCount} />)

    let newPost = React.createRef();

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPost.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div className={styles.posts__wrapper}>
            <div className={styles.add_post__wrapper}>
                <span>My posts:</span>
                <textarea ref={newPost}
                    onChange={onPostChange}
                    value={props.profilePage.newPostText}>\
                </textarea>
            </div>
            <button onClick={onAddPost}>Add post</button>
            {postElements}
        </div>
    )
}

export default MyPosts;