import React from 'react';
import '../components/style.css';


class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        status : this.props.status,
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
                        <div  className={this.state.status  ? 'status-online' : 'status-offline'}
                onClick={event => {
                    const Offline = !this.state.status;
                    this.setState({ status: Offline });

              }}
               > </div>
               <span>{this.state.status ? 'Online' : 'Offline'} </span>

                    </div>
                </div>
            </div>
         </div>
    )
}
}

export default Contact;