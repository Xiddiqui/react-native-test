import { combineReducers } from 'redux';
import postReducer from './postReducer'
import createPostModalReducer from './createPostModalReducer'

const RootReducer = combineReducers(
    {
        postReducer: postReducer,
        createPostModalReducer: createPostModalReducer
    }
);
export default RootReducer