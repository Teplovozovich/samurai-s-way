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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, { id: 16, message: action.newMessageBody }],
            }
        }
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    }
}


export default dialogsReducer;