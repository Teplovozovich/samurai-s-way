import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";
import { getAuthUserData } from "./auth-reducer.ts";

const INITIALIZED_SUCCESS = "APP/INITIALIZED_SUCCESS"

export type InitialStateType = {
    initialized: boolean,
}

let initialState: InitialStateType = {
    initialized: false,
};

const appReducer = (state = initialState, action): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state;
    }
}

type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = (): InitializedSuccessActionType => {
    return {
        type: INITIALIZED_SUCCESS,
    }
}

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    promise.then(() => {
        dispatch(initializedSuccess())
    })
}

export default appReducer;