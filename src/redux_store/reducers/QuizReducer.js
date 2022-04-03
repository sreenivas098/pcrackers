import { Quiz } from "../../share/Quiz";
import { GET_QUIZ } from "./Actions";

const initialState = {
    quiz: Quiz
}
export const QuizReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_QUIZ:
            return {
                ...state,
            }
        default:
            return {...state}
    }
}