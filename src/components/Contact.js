import React from 'react';
import '../components/style.css';

const Contact = (props) => {
    return (
        <div className="Contact">
            <img className="avatar" src={props.avatar} alt=""/>
            <div>
                <div className="name">{props.name}</div>
                <div className="status">
                    <div className="status-text">
                        <div className={props.online === "true" ? 'status-online' : 'status-offline'}></div>
                            {props.online === "true" ? "Online" : "Offline"}
                    </div>
                </div>
            </div>
         </div>
    )
}

export default Contact;