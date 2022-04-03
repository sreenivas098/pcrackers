import { INITIATED, LOGIN, LOGOUT, SIGNUP } from "./Actions"


const initialState = {
    user: 'test', 
    initiated: false
}
const AccountReducer = (state = initialState  , action) =>{
    switch(action.type){
        case INITIATED:
            return {
                ...state,
                initiated: true
            }
        case LOGIN:
            return {
                ...state,
                user: action.payload,
                initiated: false,
            }
        case SIGNUP:
            return {
                ...state,
                user: action.payload,
                initiated: false,
            }
        case LOGOUT:
            return{
                ...state,
                user: action.payload
            }
        default:
            return {...state}
    }
}

export default AccountReducer