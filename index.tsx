import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

try {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  console.error("Failed to render React app:", error);
  // Render a fallback error UI directly to DOM if React fails to initialize
  rootElement.innerHTML = `
    <div style="color: #ef4444; font-family: monospace; padding: 2rem; border: 1px solid #ef4444; margin: 2rem; background: rgba(0,0,0,0.8);">
      <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">Startup Error</h2>
      <p>The application failed to start.</p>
      <pre style="margin-top: 1rem; opacity: 0.8; white-space: pre-wrap;">${error}</pre>
    </div>
  `;
}