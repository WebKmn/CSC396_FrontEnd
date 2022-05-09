import actionTypes from '../constants/actionTypes'

export const initialState = {user: null};

const reducer = (state, action) => {
    switch (action.type){
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            }
        case actionTypes.USER_LOGOUT:
            return {
            }
        default:
            return state
    }
}

export default reducer;