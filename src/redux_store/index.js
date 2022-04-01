import { combineReducers } from "redux";
import AccountReducer from "./reducers/AcountReducer";

export const rootReducer = combineReducers({
        AccountData: AccountReducer,
})
