import {  INITIATED, LOGIN, SIGNUP } from "../Actions"


export const AccountLogin = (gmail, password, history) => dispatch =>  {
    dispatch({type: INITIATED});
    const action = {
        type: LOGIN,
        payload: gmail
    }
    dispatch(action);
    history("/branch")
}

export const AccountSignup = ({fullName, idNo, gmail, password, phoneNumber, history}) => dispatch =>{
    dispatch({type: INITIATED});
    const action = {
        type: SIGNUP,
        payload: gmail
    }
    dispatch(action);
    // history("/branch")
}