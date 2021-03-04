import axios from "axios"
import { GET_POSTS, GET_USERS, GET_TODOS, GET_COMMENTS } from "./constants"

export const getPosts = () => async dispatch => {
    await axios({
        method: "GET",
        url: "https://gorest.co.in/public-api/posts",
    }).then(response => {
        if(response.status === 200){
            dispatch({
                type: GET_POSTS,
                payload: response.data.data
            })
        }
    })
}

export const getUsers = () => async dispatch => {
    await axios({
        method: "GET",
        url: "https://gorest.co.in/public-api/users"
    }).then(response => {
        if(response.status === 200){
            dispatch({
                type: GET_USERS,
                payload: response.data.data
            })
        }
    })
}

export const getTodos = () => async dispatch => {
    await axios({
        method: "GET",
        url: "https://gorest.co.in/public-api/todos"
    }).then(response => {
        if(response.status === 200){
            dispatch({
                type: GET_TODOS,
                payload: response.data.data
            })
        }
    })
}

export const getComments = () => async dispatch => {
    await axios({
        method: "GET",
        url: "https://gorest.co.in/public-api/comments"
    }).then(response => {
        if(response.status === 200){
            dispatch({
                type: GET_COMMENTS,
                payload: response.data.data
            })
        }
    })
}
