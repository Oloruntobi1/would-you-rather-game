import {getInitialData} from "../utils/api_helper"
import { showLoading, hideLoading } from "react-redux-loading"
import { receiveUsers } from "./users"
import { receiveQuestions } from "./questions"


export const RECEIVE_DATA = 'RECEIVE_DATA'

 


export function handleInitialData(){
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
        .then(({users, questions}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(hideLoading())
        })
    }
}