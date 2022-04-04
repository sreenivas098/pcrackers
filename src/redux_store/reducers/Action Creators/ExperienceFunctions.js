import { Experience } from "../../../share/Experience"
import { READ_EXPERIENCE } from "../Actions"

export const ExperienceFunctions = (id) => dispatch => {
    const experieces = Experience;
    const data = id !== 0 ? experieces.filter(experience => experience.companyId === id) : experieces
    const action = {
        type: READ_EXPERIENCE,
        payload: data
    }
    dispatch(action)
}