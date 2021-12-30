import {createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import postReducer from '../reducers/postReducer'

const createstorewithmiddleware = applyMiddleware(thunk)(createStore)

const store = createstorewithmiddleware(postReducer)

export default store