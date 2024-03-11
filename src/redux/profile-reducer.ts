import { stopSubmit } from "redux-form";
import { usersAPI, profileAPI } from "../api/api";
import { PhotosType, PostType, ProfileType } from "../types/types";

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
        { id: 4, post: "redux", likeCount: 0 }] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText: ''
}

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
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
            return { ...state, profile: { ...state.profile, photos: action.photos } as ProfileType }

        default:
            return state;
    }

}

type AddPostActionCreatorActionType = {
    type: typeof ADD_POST
    newPostBody: string
}
export const addPostActionCreator = (newPostBody: string): AddPostActionCreatorActionType => {
    return {
        type: ADD_POST,
        newPostBody
    }
}

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => {
    return {
        type: SET_USER_PROFILE,
        profile,
    }
}

type SetStatusProfileActionType = {
    type: typeof SET_STATUS_PROFILE
    status: string
}
export const setStatusProfile = (status: string): SetStatusProfileActionType => {
    return {
        type: SET_STATUS_PROFILE,
        status
    }
}

type DeletePostActionType = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId: number): DeletePostActionType => {
    return {
        type: DELETE_POST,
        postId
    }
}

type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => {
    debugger
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
    }
}

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}
export const getStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatusProfile(response.data));
}
export const updateStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatusProfile(status));
    }
}
export const savePhoto = (file: any) => async (dispatch: any) => {
    debugger
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
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