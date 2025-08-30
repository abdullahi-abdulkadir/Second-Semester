


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './styles/global.css'

// ✅ TanStack Query setup
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

// ✅ React Router setup
import { BrowserRouter } from 'react-router-dom'

// ✅ ErrorBoundary
import { ErrorBoundary } from './components/ErrorBoundary.js'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </ErrorBoundary>
  </React.StrictMode>,
)
