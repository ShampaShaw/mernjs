import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from './reducres'; //reducer is a folder

import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(<Provider store={store}>
        <App />
    </Provider>
    ); //connected div with id of root