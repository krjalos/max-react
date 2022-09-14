import ReactDOM from 'react-dom/client';
import LoginContextProvider from "./context/context";
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LoginContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LoginContextProvider>
);
