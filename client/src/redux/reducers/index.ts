import gui from './gui'
import user from './user'
import cards from './cards'
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import history from '../store/history'
import { History } from 'history'

const createRootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    gui,
    user,
    cards,
})

export default createRootReducer(history)
