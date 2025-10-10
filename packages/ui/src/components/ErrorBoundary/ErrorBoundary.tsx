import React, { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

export interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
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

      return (
        <div className="flex items-center justify-center min-h-[400px] p-xl">
          <div className="max-w-md text-center space-y-lg">
            <div className="space-y-sm">
              <h2 className="text-2xl font-semibold text-text">
                Something went wrong
              </h2>
              <p className="text-text-muted">
                We encountered an unexpected error. Please try again.
              </p>
            </div>

            {error && (
              <details className="text-left">
                <summary className="cursor-pointer text-sm text-text-muted hover:text-text">
                  Error details
                </summary>
                <pre className="mt-sm p-md bg-surface-2 rounded-md text-xs overflow-auto border border-border">
                  {error.message}
                </pre>
              </details>
            )}

            <button
              onClick={this.reset}
              className="px-lg py-sm bg-primary text-bg font-medium rounded-md hover:bg-primary-hover transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return children;
  }
}
