import { connect } from 'react-redux'; 
import { getConnected } from '../../actions/connection_actions';
import {getConnections, clearUsers} from '../../actions/user_actions';

import PeerChat from './chat_p2p'


const mSTP = state => {
  const selfId = state.session.user.id
  const name = state.session.user.name
  const friends = Object.values(state.friends)
  // debugger
    return({
      selfId,
      name,
      friends
    })
}

const mDTP = dispatch => {
    return ({
      getConnectionsAsUsers: selfId =>dispatch(getConnections(selfId)), 
      getConnections: (selfId) => dispatch(getConnected(selfId))
    })
}

export default connect(mSTP, mDTP)(PeerChat)