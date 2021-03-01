import {connect} from 'react-redux';
import { getConnected } from '../../actions/connection_actions';
import {getConnections, clearUsers} from '../../actions/user_actions';
import Connections from './connections';

const mSTP = (state) => {
  return ({
    friends: Object.values(state.friends),
    myId: state.session.user.id
  })
}

const mDTP = dispatch => {
  return ({
    getConnectionsAsUsers: selfId =>dispatch(getConnections(selfId)), 
    getConnections: (selfId)=>dispatch(getConnected(selfId)),
    clearUsers: ()=>dispatch(clearUsers())
  })
}

const ConnectionsContainer = connect(mSTP, mDTP)(Connections);

export default ConnectionsContainer; 