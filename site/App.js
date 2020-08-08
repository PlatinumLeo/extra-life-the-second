import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Router from './components/Router';

const App = props => {
    return (
        <>
            <Header/>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </>
    );
};

export default App;
