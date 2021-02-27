import { 
RECEIVE_FRIENDS
} from '../../actions/user_actions';

export default function friendsReducer(state = [], action) {
  switch (action.type) {
    case RECEIVE_FRIENDS:
      return action.friends.data;
    default:
      return state;
  }
}