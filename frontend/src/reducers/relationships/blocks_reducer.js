import { 
RECEIVE_BLOCKS
} from '../../actions/connection_actions';

export default function blocksReducer(state = null, action) {
  switch (action.type) {
    case RECEIVE_BLOCKS:
      return action.blocks.data;
    default:
      return state;
  }
}