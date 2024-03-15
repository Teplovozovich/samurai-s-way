import { reduxForm } from "redux-form"
import { createField, LoginInput, Textarea } from "../../Common/FormsControls/FormsControls.tsx"
import styles from "./ProfileInfo.module.scss"

const ProfileDataForm = ({ handleSubmit, profile, onSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <button >save</button>
                </div>
            </div>
            {error && <div className={styles.formSummaryError}>
                {error}
            </div>
            }
            <div>
                Full name: {createField("Full name", "fullName", [], LoginInput)}
            </div>
            <div>
                Looking for a job: {createField("", "lookingForAJon", [], LoginInput, { type: "checkbox" })}
            </div>
            <div>
                My professional skills: {profile.lookingForAJobDescription}
                {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
            </div>
            <div>
                About me:
                {createField("About me", "aboutMe", [], Textarea)}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={styles.contact}>
                        <b>{key}: {createField(key, "contacts." + key, [], LoginInput)}</b>
                    </div>
                })}
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormReduxForm