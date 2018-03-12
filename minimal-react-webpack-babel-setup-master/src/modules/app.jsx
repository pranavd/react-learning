import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';


const divStyle = {
    width: '80%'
}

const recipientDiv = {
    borderStyle: "solid",
    borderWidth: ".05rem",
    borderRadius: ".25em",
    borderColor: "lightgray",
    padding: "1rem",
    backgroundColor: "lightblue"
}

const addRecipientButtonStyle = {
    marginLeft: '10px'
}

const removeRecipient = {
    float: "right",
    paddingTop: ".4rem"
}

const recipientMessage = {
    resize: "none"
}

const RecipientBlock = props => {
    return (
        <div style={recipientDiv}>
            <div className="row">
                <div className="col">
                    <input className="form-control" value={props.details.order} type="text" placeholder="Routing order..." />
                </div>
                <div className="col">
                    <input className="form-control" value={props.details.name} type="text" placeholder="Name..." />
                </div>
                <div className="col">
                    <input className="form-control" value={props.details.email} type="text" placeholder="Mail..." />
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col">
                    <textarea style={recipientMessage} className="form-control" name="" id="" cols="40" rows="" placeholder="Enter the message...">{props.details.message}</textarea>
                    <a style={removeRecipient} href="#">
                        <i className="far fa-trash-alt"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}


export class RecipientBlockContainer extends React.Component {

    addRecipient = () => {

        let recipients = this.props.recipientsdetails;

        recipients.sort(function (recipient1, recipient2) {
            return recipient1.order - recipient2.order
        })

        recipients.push({
            order: recipients[recipients.length - 1].order + 1,
            name: null,
            email: null,
            message: null
        })

        console.log(recipients);

        this.setState(recipients);
    }

    sendEnvelope = () => {
        alert("envelope sent")
    }

    render() {

        var recipientBlocks = this.props.recipientsdetails.map(function (recipientDetail) {
            return (
                <div><RecipientBlock details={recipientDetail} /><br /></div>
            );
        });

        console.log(recipientBlocks);
        console.log(typeof recipientBlocks);

        return (
            <div>
                <div style={divStyle} className="container">
                    {recipientBlocks}
                    <br />
                    <div className="row">
                        <div className="col-xl-2">
                            <button onClick={this.sendEnvelope} type="button" className="btn btn-light btn-sm">Send Envelope</button>
                        </div>
                        <div className="col">
                            <button onClick={this.addRecipient} type="button" className="btn btn-light btn-sm ">Add Recipient</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}