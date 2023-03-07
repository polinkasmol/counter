import ReactDOM from 'react-dom/client';
import App from "./components/App/App";

import reportWebVitals from './reportWebVitals';

import './index.css';


const rootDiv = document.getElementById('root');
const root = ReactDOM.createRoot(rootDiv);

root.render(
    <App/>
);


reportWebVitals();
