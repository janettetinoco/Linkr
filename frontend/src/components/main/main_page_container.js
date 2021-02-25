import {connect} from 'react-redux'; 
import { getBlocked, getConnected, getPending } from '../../actions/connection_actions';
import { filterUsersBy, getSelf, removeUserFromState } from '../../actions/user_actions';
import MainPage from './main_page';

const mSTP = state =>{
  return({
    usersToDisplay: Object.values(state.users).filter( (user)=> user._id !== state.session.user.id),
    self: state.users[state.session.user.id],
    myId: state.session.user.id
  })
}

const mDTP = dispatch =>{
  return({
    getSelf: (selfId)=>dispatch(getSelf(selfId)),
    filterUsersBy: (filter, value)=>dispatch(filterUsersBy(filter, value)), 
    removeUserFromState: (selfId)=> dispatch(removeUserFromState(selfId)),
    getConnections: (selfId) => dispatch(getConnected(selfId)),
    getBlocks: (selfId) => dispatch(getBlocked(selfId)),
    getPendings: (selfId) => dispatch(getPending(selfId))
  })
}

const MainPageContainer = connect(mSTP, mDTP)(MainPage); 
export default MainPageContainer; 