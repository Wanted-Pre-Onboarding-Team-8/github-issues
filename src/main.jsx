import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import { GithubStore } from '@/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GithubStore>
      <GlobalStyle />
      <App />
    </GithubStore>
  </React.StrictMode>,
);
