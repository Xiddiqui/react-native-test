import {
    FETCHING_POSTS_FAILIOUR,
    FETCHING_POSTS_SUCCESS,
    FETCHING_POSTS_REQUEST,
    HIDE_DELETE_MODAL,
    SHOW_DELETE_MODAL,
    EXTRA,
    EXTRA_FALSE
} from '../types'

const initialState = {
    isFetching: false,
    visible:false,
   
    errorMessage: '',
    postArr: [],
    extra:true,


}

const postReducer = (state = initialState, action) => {
    console.log('\n\nred  hfhhgfhfg',action,'bhhhjghjghjg',state);
    
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
       
        case EXTRA:
                return {extra:action.extrapayload}
        case EXTRA_FALSE:
                return {extra:action.extrapayload}
        default:
            return state;

    }
}
export default postReducer