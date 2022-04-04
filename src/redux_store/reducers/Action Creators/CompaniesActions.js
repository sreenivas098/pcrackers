import { Companies } from "../../../share/Companies"
import { GET_COMPANIES } from "../Actions"

export const GetCompanies = () => dispatch => {
    const action = {
        type: GET_COMPANIES,
        payload: Companies
    }
    dispatch(action);
}