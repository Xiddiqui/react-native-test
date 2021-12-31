import {createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import RootReducer from '../reducers/index'

const createstorewithmiddleware = applyMiddleware(thunk)(createStore)

const store = createstorewithmiddleware(RootReducer)

export default store