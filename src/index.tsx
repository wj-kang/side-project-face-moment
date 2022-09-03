import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { io } from 'socket.io-client';
io();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);
