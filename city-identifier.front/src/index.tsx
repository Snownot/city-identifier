import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'mobx-react';
import initializeStores from "./store/storeInitializer";
import {BrowserRouter} from "react-router-dom";

const stores = initializeStores();
ReactDOM.render(
    <Provider {...stores}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
