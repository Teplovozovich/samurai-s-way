const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND-MESSAGE"

let initialState = {
    dialogs: [
        { id: 1, name: "Наруто" },
        { id: 2, name: "Итачи" },
        { id: 3, name: "Танас" },
        { id: 4, name: "Ванек" },
        { id: 5, name: "Он" },
        { id: 6, name: "Она" }
    ],
    messages: [
        { id: 1, message: "hi" },
        { id: 2, message: "u my friend now" },
        { id: 3, message: "react" },
        { id: 4, message: "redux" },
        { id: 5, message: "ты" },
        { id: 6, message: "znat" },
        { id: 7, message: "будешь" },
        { id: 8, message: "crutaaaaaaaa" },
        { id: 9, message: "aitika aitika" },
        { id: 10, message: "gomasutraaa" }
    ],
    newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({ id: 16, message: body });
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body,
    }
}

export default dialogsReducer;