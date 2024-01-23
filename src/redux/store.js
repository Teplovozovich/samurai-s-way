import dialogsReducer from "./dialogs-reducer"
import navbarReducer from "./navbar-reducer"
import profileReducer from "./profile-reducer"

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, post: "i'm fine", likeCount: 1465684 },
                { id: 2, post: "it's my first post", likeCount: 75 },
                { id: 3, post: "react", likeCount: 1 },
                { id: 4, post: "redux", likeCount: 0 }],
            newPostText: "",
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: "Наруто" },
                { id: 2, name: "Итачи" },
                { id: 3, name: "Танас" },
                { id: 4, name: "Ванек" },
                { id: 5, name: "Он" },
                { id: 6, name: "Она" }],
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
                { id: 10, message: "gomasutraaa" }],
            newMessageBody: "",
        },
        navbar: {
            friends: [
                { id: 1, name: "Dimich", avatar: "http://png.pngtree.com/png-clipart/20230429/original/pngtree-happy-pig-png-image_9122192.png" },
                { id: 2, name: "Pig", avatar: "https://w7.pngwing.com/pngs/254/220/png-transparent-angry-birds-pig-illustration-pig-angry-birds-go-angry-birds-2-angry-birds-star-wars-angry-birds-smiley-bird-snout.png" },
                { id: 2, name: "Sakura", avatar: "https://w7.pngwing.com/pngs/254/220/png-transparent-angry-birds-pig-illustration-pig-angry-birds-go-angry-birds-2-angry-birds-star-wars-angry-birds-smiley-bird-snout.png" }
            ]
        }
    },
    _callSubscriber() {
        console.log("Aboba")
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    updateNewPostText(newText) {

    },
    addPost() {

    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);

        this._callSubscriber(this._state)

    }
}

export default store;
Window.store = store;