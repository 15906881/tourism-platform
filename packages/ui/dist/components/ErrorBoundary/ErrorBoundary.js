'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { Component } from 'react';
export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    componentDidCatch(error, errorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
        this.props.onError?.(error, errorInfo);
    }
    reset = () => {
        this.setState({ hasError: false, error: null });
    };
    render() {
        const { hasError, error } = this.state;
        const { children, fallback } = this.props;
        if (hasError) {
            if (fallback) {
                return fallback;
            }
            return (_jsx("div", { className: "flex items-center justify-center min-h-[400px] p-xl", children: _jsxs("div", { className: "max-w-md text-center space-y-lg", children: [_jsxs("div", { className: "space-y-sm", children: [_jsx("h2", { className: "text-2xl font-semibold text-text", children: "Something went wrong" }), _jsx("p", { className: "text-text-muted", children: "We encountered an unexpected error. Please try again." })] }), error && (_jsxs("details", { className: "text-left", children: [_jsx("summary", { className: "cursor-pointer text-sm text-text-muted hover:text-text", children: "Error details" }), _jsx("pre", { className: "mt-sm p-md bg-surface-2 rounded-md text-xs overflow-auto border border-border", children: error.message })] })), _jsx("button", { onClick: this.reset, className: "px-lg py-sm bg-primary text-bg font-medium rounded-md hover:bg-primary-hover transition-colors", children: "Try again" })] }) }));
        }
        return children;
    }
}
//# sourceMappingURL=ErrorBoundary.js.map