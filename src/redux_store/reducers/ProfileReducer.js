import { GET_PROFILE } from "./Actions";

const initialState = {
    profile: '',
    error: ''
}

export const ProfileReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_PROFILE:
            return{
                ...state,
                profile: action.payload
            }
        default:
            return {
                ...state
            }
    }
}