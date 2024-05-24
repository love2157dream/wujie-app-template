import React from 'react'
import { createRoot } from 'react-dom/client';

import App from './App.tsx'
import './index.css'


const domNode: any  = document.getElementById('root');
const root = createRoot(domNode);

console.log('react', window.__WUJIE);

if (window.__POWERED_BY_WUJIE__) {
  window.__WUJIE_MOUNT = () => {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
    
  };
  window.__WUJIE_UNMOUNT = () => {
    root.unmount();
  };
} else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}
