import {connect} from 'react-redux'; 
import { createConnection, getBlocked, getConnected, getPending } from '../../actions/connection_actions';
import { filterUsersBy, getSelf, removeUserFromState, clearUsers } from '../../actions/user_actions';
import MainPage from './main_page';
import {usersToDisplay} from '../../reducers/selectors';
import {openModal, closeModal} from '../../actions/modal_actions'

const mSTP = state =>{
  return({
    usersToDisplay: usersToDisplay(state),
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
    getPendings: (selfId) => dispatch(getPending(selfId)),
    createConnection: (selfId, otherId, status) => dispatch(createConnection(selfId, otherId, status)),
    openModal: (modal) => dispatch(openModal(modal)),
    clearUsers: () => dispatch(clearUsers()),
    closeModal: ()=> dispatch(closeModal())
  })
}

const MainPageContainer = connect(mSTP, mDTP)(MainPage); 
export default MainPageContainer; 