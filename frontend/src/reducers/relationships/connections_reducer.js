import { 
RECEIVE_CONNECTIONS
} from '../../actions/connection_actions';
import { RECEIVE_USER_LOGOUT } from '../../actions/session_actions';

export default function connectionsReducer(state = null, action) {
  switch (action.type) {
    case RECEIVE_CONNECTIONS:
      return action.connections.data;
    case RECEIVE_USER_LOGOUT:
      return null;
    default:
      return state;
  }
}