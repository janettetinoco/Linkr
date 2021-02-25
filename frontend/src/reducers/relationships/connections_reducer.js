import { 
RECEIVE_CONNECTIONS
} from '../../actions/connection_actions';

export default function connectionsReducer(state = null, action) {
  switch (action.type) {
    case RECEIVE_CONNECTIONS:
      return action.connections.data;
    default:
      return state;
  }
}