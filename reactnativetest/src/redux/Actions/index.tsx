import {
    FETCHING_POSTS_FAILIOUR,
    FETCHING_POSTS_REQUEST,
    FETCHING_POSTS_SUCCESS
} from "../types";
export const fetchingpostrequest = (payload) => {
    console.log('fetictionrequestaction', payload)
    return {
        type: FETCHING_POSTS_REQUEST,
        payload: payload,
    };
};
export const fetchingpostsuccess = json => {
     console.log('RequestSuccess', json)
    return {
        type: FETCHING_POSTS_SUCCESS,
        payload: json,
    };
};
export const fetchingpostfailure = error => {
    console.log('RequestError', error)

    return {
        type: FETCHING_POSTS_FAILIOUR,
        payload: error,
    };
};
export const fetchposts = () => {
    return async dispatch => {
        dispatch(fetchingpostrequest());
        try {
            let responce = await fetch('https://jsonplaceholder.typicode.com/posts');
            let json = await responce.json();
            dispatch(fetchingpostsuccess(json))
        } catch (error) {
            dispatch(fetchingpostfailure(error))
        }

    }
}