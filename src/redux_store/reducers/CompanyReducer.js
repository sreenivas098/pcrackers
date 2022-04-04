import { GET_COMPANIES } from "./Actions"


const initialState = {
    names: []
}
export const CompanyReducer = (state = initialState, action ) => {
    switch(action.type){
        case GET_COMPANIES:
            return{
                ...state,
                names: action.payload
            }
        default:
            return {
                ...state
            }
    }
}