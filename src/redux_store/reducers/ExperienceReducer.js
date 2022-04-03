import { Experience } from "../../share/Experience"
import { READ_EXPERIENCE, WRITE_EXPERIENCE } from "./Actions"

const initialState = {
    experience: Experience
}
export const ExperienceReducer = (state=initialState, action) => {
    switch(action.type){
        case READ_EXPERIENCE:
            return {
                ...state,
                experience: action.payload
            }
        case WRITE_EXPERIENCE:
            return {
                ...state,
                experience: action.payload
            }
        default:
            return {...state}
    }
}