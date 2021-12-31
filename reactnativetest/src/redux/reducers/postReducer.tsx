import {
    FETCHING_POSTS_FAILIOUR,
    FETCHING_POSTS_SUCCESS,
    FETCHING_POSTS_REQUEST,
    HIDE_DELETE_MODAL,
    SHOW_DELETE_MODAL,
    SHOW_CREATE_POST_MODAL,
    HIDE_CREATE_POST_MODAL
} from '../types'

const initialState = {
    isFetching: false,
    visible:false,
    createpostModal:false,
    errorMessage: '',
    postArr: []
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_POSTS_REQUEST:
            return { ...state, isFetching: true }
        case FETCHING_POSTS_FAILIOUR:
            return { ...state, isFetching: false, errorMessage: action.payload }
        case FETCHING_POSTS_SUCCESS:
            return { ...state, isFetching: false, postArr: action.payload }
        case SHOW_DELETE_MODAL:
            return {visible:action.payload}
        case HIDE_DELETE_MODAL:
            return {visible:action.payload}
        case SHOW_CREATE_POST_MODAL:
            return {createpostModal:action.postModalpayload}
        case HIDE_CREATE_POST_MODAL:
            return {createpostModal:action.postModalpayload}
        default:
            return state;

    }
}
export default postReducer