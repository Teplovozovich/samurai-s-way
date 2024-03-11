const SEND_MESSAGE = "DIALOGS-REDUCER/SEND-MESSAGE"

type DialogType = {
    id: number | null
    name: string | null
}
type MessageType = {
    id: number | null
    message: string | null
}

let initialState = {
    dialogs: [
        { id: 1, name: "Наруто" },
        { id: 2, name: "Итачи" },
        { id: 3, name: "Танас" },
        { id: 4, name: "Ванек" },
        { id: 5, name: "Он" },
        { id: 6, name: "Она" }
    ] as Array<DialogType>,
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
    ] as Array<MessageType>,
};

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, { id: 16, message: action.newMessageBody }],
            }
        }
        default:
            return state;
    }
}

type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    }
}


export default dialogsReducer;