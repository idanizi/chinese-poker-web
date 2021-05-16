import React from 'react'
import Home from '../pages/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../redux/store'
import { ConnectedRouter } from 'connected-react-router'
import history from '../redux/store/history'
import routes from '../routes'
import PageNotFound from '../pages/PageNotFound'
import App from './App'
import ErrorBoundary from './ErrorBoundary'


export default function Root() {
    return (
        <ErrorBoundary>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Router>
                        <App>
                            <Switch>
                                <Route exact path={routes.HOME} component={Home} />
                                <Route path="*" component={PageNotFound} />
                            </Switch>
                        </App>
                    </Router>
                </ConnectedRouter>
            </Provider>
        </ErrorBoundary>
    )
}
