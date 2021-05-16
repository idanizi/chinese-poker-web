import logger from './logger'
import thunk from './thunk'
import { routerMiddleware } from 'connected-react-router';
import history from '../store/history';

const middleware = [
    routerMiddleware(history),
    thunk,
    logger
]

export default middleware;