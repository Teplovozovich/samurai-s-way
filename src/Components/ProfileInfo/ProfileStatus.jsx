import React from "react";
import styles from "./ProfileInfo.module.scss"



class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        title: "abrakadara"
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div className={styles.profile_status}>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div tabIndex={0}>
                        <input onBlur={this.deactivateEditMode.bind(this)} value={this.props.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;