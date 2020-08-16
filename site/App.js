import React, {useEffect, useState} from 'react';

import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Router from './components/Router';

const App = props => {
    // TODO: should move saving this to redux store
    const [dimensions, setDimensions] = useState({width: window.innerWidth, height: window.innerHeight});

    useEffect(() => {
        window.addEventListener('resize', updateWindowDimensions);

        return () => window.removeEventListener('resize', updateWindowDimensions);
    });

    const updateWindowDimensions = () => {
        setDimensions({width: window.innerWidth, height: window.innerHeight});
    }

    return (
        <>
            <Header dimensions={dimensions}/>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </>
    );
};

export default App;
