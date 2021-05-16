import gui from './gui'
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import history from '../store/history'
import { History } from 'history'

const createRootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    gui,
})

export default createRootReducer(history)
