import { applyMiddleware, combineReducers, createStore } from "redux";
import { configureStore, createSlice } from '@reduxjs/toolkit'
import profileReducer from "./profile-reducer.ts";
import dialogsReducer from "./dialogs-reducer.ts";
import navbarReducer from "./navbar-reducer.ts";
import usersReducer from "./users-reducer.ts";
import authReducer from "./auth-reducer.ts";
import ThunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app-reducer.ts";
import { compose } from "redux";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    navbar: navbarReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,
    composeEnhancers(applyMiddleware(ThunkMiddleware)
    ));

export default store;