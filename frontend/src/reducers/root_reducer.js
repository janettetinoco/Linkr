import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import users from './users_reducer';
import modal from './modal_reducer';
import connections from './relationships/connections_reducer';
import blocks from './relationships/blocks_reducer';
import pendings from './relationships/pendings_reducer'; 
import friends from './relationships/friends_reducer'
const RootReducer = combineReducers({
  session,
  errors,
  users,
  modal,
  connections,
  pendings,
  blocks,
  friends
});

export default RootReducer;