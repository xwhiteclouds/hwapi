import { createStore, applyMiddleware } from "redux";
import { GET_POSTS, GET_USERS, GET_TODOS, GET_COMMENTS } from "./constants";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const initialState = {
    Posts: []
}

const Reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_POSTS: return {
            ...state,
            Posts: [...action.payload]
        }
        case GET_USERS: return {
            ...state,
            Users: [...action.payload]
        }
        case GET_TODOS: return {
            ...state,
            Todos: [...action.payload]
        }
        case GET_COMMENTS: return {
            ...state,
            Comments: [...action.payload]
        }
        default: return state
    }
}

const store = createStore(Reducer,
    applyMiddleware(thunk, logger));

export default store;