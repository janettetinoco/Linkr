
import { RECEIVE_SELF, RECEIVE_USERS, REMOVE_USER_FROM_STATE } from '../actions/user_actions';
import {RECEIVE_USER_LOGOUT} from '../actions/session_actions'; 
import {RECEIVE_BLOCKS, RECEIVE_PENDINGS, RECEIVE_CONNECTIONS} from '../actions/connection_actions';

const initialState = {};

const users = function(state = initialState, action) {
  Object.freeze(state)
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_USERS:  

      Object.values(action.users.data).forEach( user=>{
        nextState[user._id] = user; 
      });
      return nextState;
    case RECEIVE_SELF:
      nextState[action.self.data._id] = action.self.data;
      return nextState;
    case REMOVE_USER_FROM_STATE:
      delete nextState[action.userId];
    return nextState;
    case RECEIVE_USER_LOGOUT: 
      return initialState;
    case RECEIVE_BLOCKS:
      action.blocks.data.forEach( user =>{
        delete nextState[user._id]
      });
      return nextState;
    case RECEIVE_PENDINGS:
      action.pendings.data.forEach( user =>{
        delete nextState[user._id]
      });
      return nextState;
    case RECEIVE_CONNECTIONS:
      action.connections.data.forEach( user =>{
        delete nextState[user._id]
      });
      return nextState;
    default:
      return state;
  }
}
export default users