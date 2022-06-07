import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './Context';
import ErrorFallback from './ErrorBoundary';


import App from './App';
import { ErrorBoundary } from 'react-error-boundary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
    <BrowserRouter>
    <ContextProvider>
    <App />
    </ContextProvider>
    </BrowserRouter>
    </ErrorBoundary>
    
  </React.StrictMode>
  
);
