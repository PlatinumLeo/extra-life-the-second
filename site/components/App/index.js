import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Header from '../Header';
import Router from '../Router';

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
