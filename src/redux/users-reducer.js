const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"

let initialState = {
    users: [
        { id: 1, isFollowed: true, fullName: "Naruto Uzumaki", status: "I'm aboba", location: { country: "Russia", city: "Tumen" } },
        { id: 2, isFollowed: false, fullName: "Sakura Nara", status: "I'm aboba", location: { country: "Japan", city: "Surgut" } },
        { id: 3, isFollowed: false, fullName: "Saske Uchiha", status: "I'm aboba", location: { country: "DodAs", city: "As" } },
    ],
    newPostText: "",
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(data => {
                    if (data.id === action.userId) {
                        return {
                            ...data,
                            isFollowed: true
                        }
                    } return data
                })

            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(data => {
                    if (data.id === action.userId) {
                        return {
                            ...data,
                            isFollowed: false
                        }
                    } return data
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }

}

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unFollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}
export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export default usersReducer;