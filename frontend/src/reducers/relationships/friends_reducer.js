import { 
RECEIVE_FRIENDS
// , RECEIVE_FRIEND
} from '../../actions/user_actions';
import {RECEIVE_USER_LOGOUT} from '../../actions/session_actions';

// Object.freeze(state)
// let nextState = Object.assign({}, state);

export default function friendsReducer(state = [], action) {
  switch (action.type) {
    case RECEIVE_USER_LOGOUT:
      return [];
    case RECEIVE_FRIENDS:
      let nextState = {};
      action.friends.data.forEach( friend=>{
        nextState[friend._id] = friend;
      })
      return nextState;
    // case RECEIVE_FRIEND:
    //   nextState[action.friend.data._id] = action.friend.data;
    //   return nextState;
    default:
      return state;
  }
}