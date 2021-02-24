import {connect} from 'react-redux'; 
import { filterUsersBy, getSelf } from '../../actions/user_actions';
import MainPage from './main_page';

const mSTP = state =>{
  return({
    usersToDisplay: Object.values(state.users),
    self: state.users[state.session.user.id],
    myId: state.session.user.id
  })
}

const mDTP = dispatch =>{
  return({
    getSelf: (myId)=>dispatch(getSelf(myId)),
    filterUsersBy: (filter, value)=>dispatch(filterUsersBy(filter, value))
  })
}

const MainPageContainer = connect(mSTP, mDTP)(MainPage); 
export default MainPageContainer; 