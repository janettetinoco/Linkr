import { 
RECEIVE_PENDINGS
} from '../../actions/connection_actions';

export default function pendingsReducer(state = null, action) {
  switch (action.type) {
    case RECEIVE_PENDINGS:
      return action.pendings.data
    default:
      return state;
  }
}