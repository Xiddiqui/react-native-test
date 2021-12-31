import {
    SHOW_CREATE_POST_MODAL,
    HIDE_CREATE_POST_MODAL,
} from '../types'

const initialState = {
    createpostModal:false,

}

const createPostModalReducer = (state = initialState, action) => {
    console.log('\n\nred modal hfhhgfhfg',action,'modal bhhhjghjghjg',state);
    
    switch (action.type) {
        case SHOW_CREATE_POST_MODAL:
            return {createpostModal:action.postModalpayload}
        case HIDE_CREATE_POST_MODAL:
            return {createpostModal:action.postModalpayload}
        default:
            return state;

    }
}
export default createPostModalReducer