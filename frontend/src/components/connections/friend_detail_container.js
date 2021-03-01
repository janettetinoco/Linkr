import {connect} from 'react-redux';
import { getConnections} from '../../actions/user_actions';
import { getConnected} from '../../actions/connection_actions';
import FriendDetail from './friend_detail';

const mSTP = (state, ownProps) => {
  return {
    friend: state.friends[ownProps.match.params.friendId],
  }
}

const mDTP = dispatch => {
  return {
    getConnectionsAsUsers: selfId =>dispatch(getConnections(selfId)), 
    getConnections: (selfId)=>dispatch(getConnected(selfId)),
  }
}

export default connect(mSTP, mDTP)(FriendDetail); 