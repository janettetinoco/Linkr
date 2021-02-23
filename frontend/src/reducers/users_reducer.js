import { RECEIVE_USERS } from '../actions/user_actions';

const initialState = {};

export default function(state = initialState, action) {
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_USERS: 
      Object.values(action.users.key).forEach( user=>{
        nextState[user.id] = user; 
      });
      return nextState;
    default:
      return state;
  }
}