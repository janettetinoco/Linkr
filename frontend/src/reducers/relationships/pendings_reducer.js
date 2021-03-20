import { 
RECEIVE_PENDINGS
} from '../../actions/connection_actions';
import { RECEIVE_USER_LOGOUT } from '../../actions/session_actions'

export default function pendingsReducer(state = null, action) {
  switch (action.type) {
    case RECEIVE_PENDINGS:
      return action.pendings.data;
    case RECEIVE_USER_LOGOUT:
      return null;
    default:
      return state;
  }
}