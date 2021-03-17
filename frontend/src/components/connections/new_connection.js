import React from 'react';
import { Link } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';


class NewConnection extends React.Component{
    render(){
        return(
            <div className="new-connection-container">
                <h1> You made a new connection!</h1>
                <div ><Link onClick={() => this.props.closeModal()} id="connections-link" to='/profile/connections'>Go to connections</Link></div>
            </div>
        )
    }
}

export default NewConnection