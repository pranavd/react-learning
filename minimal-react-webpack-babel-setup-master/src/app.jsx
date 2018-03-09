import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios'


const title = 'My Minimal React Webpack Babel Setup';

const RecipientBlock = props => {
    return (
        <div>
            <input value={props.details.name} type="text" />
            <input value={props.details.email} type="text" />
            <p>
                <textarea name="" id="" cols="40" rows="5">{props.details.message}</textarea>
            </p>
        </div>
    );
}


export class RecipientBlockContainer extends React.Component {
    render() {

        Axios.get("http://www.google.com")
        .then(function(status){
            console.log(status)
        })
        .catch(function(status){
            console.log(status);
        });

        const recipientsDetails = [{
            name: "Pranav Daipuria",
            email: "pranav.daipuria@gartner.com",
            message: "This is test message"
        },
        {
            name: "Pranav Daipuria",
            email: "pranav.daipuria@gartner.com",
            message: "This is test message"
        }];

        var recipientBlocks = recipientsDetails.map(function (recipientDetail) {
            return (
                <div><RecipientBlock details={recipientDetail} /></div>
            );
        });

        console.log(recipientBlocks);
        console.log(typeof recipientBlocks);

        return (
            <div>{recipientBlocks}</div>
        );
    }
}