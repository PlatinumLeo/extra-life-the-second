import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import { compose, createStore } from 'redux';

import App from './components/App';
// import allMiddleware from './middleware';
// import rootReducer from './reducers';

import './index.css';

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-undef

// const store = createStore(
//     rootReducer,
//     composedEnhancer(allMiddleware)
// );

render(
    <App />,
    document.getElementById('root') // eslint-disable-line no-undef
);

if (module.hot) module.hot.accept(); // eslint-disable-line no-undef
