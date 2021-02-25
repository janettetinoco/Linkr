
import { RECEIVE_SELF, RECEIVE_USERS, REMOVE_USER_FROM_STATE } from '../actions/user_actions';

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
    default:
      return state;
  }
}
export default users