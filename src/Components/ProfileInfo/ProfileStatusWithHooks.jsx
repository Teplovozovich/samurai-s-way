import React, { useEffect, useState } from "react";
import styles from "./ProfileInfo.module.scss"

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        console.log(e.currentTarget.value);
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={styles.profile_status}>
            {!editMode &&
                <div>
                    <span
                        onDoubleClick={activateEditMode}
                    > {props.status || "------"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input
                        onChange={onStatusChange}
                        onBlur={deActivateEditMode}
                        autoFocus={true}
                        value={status}
                    />
                </div>
            }
        </div >
    )
}

export default ProfileStatusWithHooks;