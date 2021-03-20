import { 
RECEIVE_BLOCKS
} from '../../actions/connection_actions';
import { RECEIVE_USER_LOGOUT } from '../../actions/session_actions';

export default function blocksReducer(state = null, action) {
  switch (action.type) {
    case RECEIVE_BLOCKS:
      return action.blocks.data;
    case RECEIVE_USER_LOGOUT:
      return null;
    default:
      return state;
  }
}