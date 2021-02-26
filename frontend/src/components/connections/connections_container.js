import {connect} from 'react-redux';
import { getConnected } from '../../actions/connection_actions';
import Connections from './connections';
import {getUsersForConnections} from '../../reducers/selectors';
const mSTP = state => {
  return ({
    connections: getUsersForConnections(state),
    myId: state.session.user.id
  })
}

const mDTP = dispatch => {
  return ({
    getConnections: (selfId)=>dispatch(getConnected(selfId))
  })
}

const ConnectionsContainer = connect(mSTP, mDTP)(Connections);

export default ConnectionsContainer; 