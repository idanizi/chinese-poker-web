import React, { Component } from 'react'
import { isDev } from 'src/helpers/env/env.helper';

export class ErrorBoundary extends Component {

    state = { hasError: false }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    logErrorToMyService = (error, errorInfo) => {
        console.error('[logErrorToMyService]', error, errorInfo)
    }

    componentDidCatch(error, errorInfo) {
        this.logErrorToMyService(error, errorInfo);
    }

    render() {
        if (this.state.hasError && isDev()) {
            return <h1>Oops... Something went wrong 😅</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary
