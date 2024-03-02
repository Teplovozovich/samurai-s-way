import Post from "./Post/Post";
import styles from "./MyPosts.module.scss"
import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../Common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

const MyPosts = (props) => {
    let postElements = props.profilePage.posts.map(data => <Post key={data.id} message={data.post} likeCount={data.likeCount} />)
    let addPost = (values) => {
        props.addPost(values.newPostBody)
    }

    return (
        <div className={styles.posts__wrapper}>
            <AddNewPostFormRedux onSubmit={addPost} />
            {postElements}
        </div>
    )
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styles.add_post__wrapper}>
                <span>My posts:</span>
                <Field validate={[required, maxLength10]} name="newPostBody" component={Textarea} placeholder="Add post..." />
            </div>
            <button>Add post</button>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({
    // a unique name for the form
    form: 'profileAddPostForm'
})(AddNewPostForm)


export default MyPosts;