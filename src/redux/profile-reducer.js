import { stopSubmit } from "redux-form";
import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS_PROFILE = "SET_STATUS_PROFILE"
const DELETE_POST = "DELETE_POST"
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"

let initialState = {
    posts: [
        { id: 1, post: "i'm fine", likeCount: 1465684 },
        { id: 2, post: "it's my first post", likeCount: 75 },
        { id: 3, post: "react", likeCount: 1 },
        { id: 4, post: "redux", likeCount: 0 }],
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, { id: 5, post: action.newPostBody, likeCount: 513 }],
                newPostText: "",
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS_PROFILE: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(post => post.id != action.postId)
            }
        }
        case SAVE_PHOTO_SUCCESS:
            debugger
            return { ...state, profile: { ...state.profile, photos: action.photos } }

        default:
            return state;
    }

}

export const addPostActionCreator = (newPostBody) => {
    return {
        type: ADD_POST,
        newPostBody
    }
}
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile,
    }
}
export const setStatusProfile = (status) => {
    return {
        type: SET_STATUS_PROFILE,
        status
    }
}
export const deletePost = (postId) => {
    return {
        type: DELETE_POST,
        postId
    }
}
export const savePhotoSuccess = (file) => {
    debugger
    return {
        type: SAVE_PHOTO_SUCCESS,
        file
    }
}

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatusProfile(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatusProfile(status));
    }
}
export const savePhoto = (file) => async (dispatch) => {
    debugger
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }));
        return Promise.reject(response.data.messages[0]);
    }
}


export default profileReducer;