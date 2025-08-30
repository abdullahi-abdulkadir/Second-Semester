import React from 'react'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 text-red-600">
          <h1 className="text-xl font-bold mb-2">Something went wrong.</h1>
          <p>{this.state.error?.message || 'Please try refreshing the page or contact support.'}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 underline text-blue-500 hover:text-blue-700"
          >
            Refresh Page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
