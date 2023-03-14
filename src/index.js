import ReactDOM from 'react-dom/client';
import App from "./components/App/App";
import {BrowserRouter} from "react-router-dom";

import Router from "./routes/Router";

import reportWebVitals from './reportWebVitals';

import './index.css';
import MainLayout from "./components/MainLayout/mainLayout";


const rootDiv = document.getElementById('root');
const root = ReactDOM.createRoot(rootDiv);

root.render(
    <BrowserRouter>
        <MainLayout>
            <Router/>
        </MainLayout>
    </BrowserRouter>

);


reportWebVitals();
