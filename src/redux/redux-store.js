import { combineReducers, createStore } from "redux";
import { configureStore, createSlice } from '@reduxjs/toolkit'
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    navbar: navbarReducer
});

let store = createStore(reducers);

export default store;