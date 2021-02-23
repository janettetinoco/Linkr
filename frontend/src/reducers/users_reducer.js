import { RECEIVE_USERS } from '../actions/user_actions';

const initialState = {};

export default function(state = initialState, action) {
  Object.freeze(state)
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_USERS:  
      
      console.log("WE IN HERE");
      return action.users;
    default:
      return state;
  }
}