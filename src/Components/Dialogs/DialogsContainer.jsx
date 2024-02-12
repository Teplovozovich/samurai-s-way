import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Dialogs from "./Dialogs";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


let AuthRedirectComponent = withAuthRedirect(Dialogs)

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
