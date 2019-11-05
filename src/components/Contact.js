import React from 'react';
import '../components/style.css';


class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        online: false,
      };
    }
    render () {
    return (
        <div className="Contact">
            <img className="avatar" src={this.props.avatar} alt=""/>
            <div>
                <div className="name">{this.props.name}</div>
                <div className="status">
                    <div className="status-text">
                        <div  className={this.state.online ? 'online' : 'offline'}
                onClick={event => {
                const Offline = !this.state.online;
                this.setState({ online: Offline });
              }}></div>
                            {this.props.online === "true" ? "Online" : "Offline"}
                    </div>
                </div>
            </div>
         </div>
    )
}
}

export default Contact;