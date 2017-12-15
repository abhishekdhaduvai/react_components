import React, { Component } from 'react';
import MdWarning from 'react-icons/md/warning';

class AlertMessage extends Component{
    render(){
        const { type, title, message } = this.props;
        const alertBox = {
            display: "flex",
            boxShadow: "0 4px 8px rgba(0,0,0,.2)",
            padding: ".66667rem",
            wordWrap: "break-word",
        }
        return (
            <div className="alertMessage" style={alertBox}>
                <div className="icon">
                    <MdWarning />
                </div>
                <div>
                    <strong>{title}</strong> {message}
                </div>
            </div>
        )
    }
}

export default AlertMessage;