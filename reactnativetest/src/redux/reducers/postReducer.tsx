import {
FETCHING_POSTS_FAILIOUR,
FETCHING_POSTS_SUCCESS,
FETCHING_POSTS_REQUEST
} from '../types'

const initialState = {
    isFetching : false,
    errorMessage : '',
    postArr : []
}

const postReducer = (state = initialState , action) => {
switch(action.type){
    case FETCHING_POSTS_REQUEST :
        return {...state , isFetching:true}
    case FETCHING_POSTS_FAILIOUR :
        return {...state , isFetching:false , errorMessage:action.payload}
        case FETCHING_POSTS_SUCCESS :
            return {...state , isFetching:false ,postArr:action.payload }
            default: 
            return state;

}
}
export default postReducer