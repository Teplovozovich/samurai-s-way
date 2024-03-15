import React from "react";
import styles from "./AddMessageForm.module.scss"
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../Common/FormsControls/FormsControls.tsx";
import { maxLengthCreator, required } from "../../../utils/validators/validators";

const maxLength = maxLengthCreator(100)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                validate={[required, maxLength]}
                name="newMessageBody"
                placeholder="Message..." />
            <button>aboba</button>
        </form>
    )
}

export default reduxForm({
    form: "dialog-add-message-form"
})(AddMessageForm);