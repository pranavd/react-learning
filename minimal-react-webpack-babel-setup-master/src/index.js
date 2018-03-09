import React from 'react';
import ReactDOM from 'react-dom';
import { RecipientBlockContainer } from './app.jsx'


ReactDOM.render(
    <RecipientBlockContainer />,
    document.getElementById('app')
);

module.hot.accept();