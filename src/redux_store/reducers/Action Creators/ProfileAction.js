import { Profile } from "../../../share/Profile"
import { GET_PROFILE } from "../Actions"


export const getProfile = (id, branch) => dispatch => {
    const profileData = Profile.filter(profile => (profile.id === id && profile.branch === branch.toUpperCase()));

    const profile = profileData.length === 1 && profileData[0]
    const action = {
        type: GET_PROFILE,
        payload: profile
    }
    dispatch(action)
}