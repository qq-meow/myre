import React from 'react';
import { render } from 'react-dom';
import Home from './Home'


const app = document.getElementById('app')
const renderDom = Component => {
    render(
        <Component />,
        app
    );
}
renderDom(Home);