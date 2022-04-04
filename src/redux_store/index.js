import { combineReducers } from "redux";
import AccountReducer from "./reducers/AcountReducer";
import { CompanyReducer } from "./reducers/CompanyReducer";
import { ExperienceReducer } from "./reducers/ExperienceReducer"
import { ProfileReducer } from "./reducers/ProfileReducer";
import { QuizReducer } from "./reducers/QuizReducer";

export const rootReducer = combineReducers({
        AccountData: AccountReducer,
        Experience: ExperienceReducer,
        Quiz: QuizReducer,
        ProfileData: ProfileReducer,
        CompanyNames: CompanyReducer,
})
