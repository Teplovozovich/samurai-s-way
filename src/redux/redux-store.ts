import { applyMiddleware, combineReducers, createStore } from "redux"
import profileReducer from "./profile-reducer.ts"
import dialogsReducer from "./dialogs-reducer.ts"
import navbarReducer from "./navbar-reducer.ts"
import usersReducer from "./users-reducer.ts"
import authReducer from "./auth-reducer.ts"
import {thunk} from "redux-thunk"
import { reducer as formReducer } from "redux-form"
import appReducer from "./app-reducer.ts"
import { compose } from "redux"

let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    navbar: navbarReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

type RootReducersType = typeof rootReducers
export type AppStateType = ReturnType<RootReducersType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducers,
    composeEnhancers(applyMiddleware(thunk)
    ))

export default store