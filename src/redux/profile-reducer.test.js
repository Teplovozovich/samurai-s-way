import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
    posts: [
        { id: 1, post: "i'm fine", likeCount: 1465684 },
        { id: 2, post: "it's my first post", likeCount: 75 },
        { id: 3, post: "react", likeCount: 1 },
        { id: 4, post: "redux", likeCount: 0 }],
};

test('length of post should increment', () => {
    let action = addPostActionCreator("it gomasutra")

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(5)
});

test('message of new post shoud be gamasutra', () => {
    let action = addPostActionCreator("it gomasutra")

    let newState = profileReducer(state, action)

    expect(newState.posts[4].post).toBe("it gomasutra")
});

test('length of post should decrement', () => {
    let action = deletePost(1)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
});