import {connect} from 'react-redux';
import {requestFriend} from '../../actions/friend_actions';
import { getConnections} from '../../actions/user_actions';
import { getConnected} from '../../actions/connection_actions';
import FriendDetail from './friend_detail';

const mSTP = (state, ownProps) => {
  console.log("OWN PROP", ownProps.match.params.friendId);
  console.log("friends", state.friends);
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