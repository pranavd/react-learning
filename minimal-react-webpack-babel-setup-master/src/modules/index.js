import React from 'react';
import ReactDOM from 'react-dom';
import { RecipientBlockContainer } from './app.jsx'


const recipientsDetails = [{
    order: 1,
    name: "Pranav Daipuria",
    email: "pranav.daipuria@gartner.com",
    message: null
},
{
    order: 2,
    name: null,
    email: null,
    message: null
}];

ReactDOM.render(
    <RecipientBlockContainer recipientsdetails={recipientsDetails}/>,
    document.getElementById('app')
);

module.hot.accept();