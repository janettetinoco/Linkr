import {connect} from 'react-redux'; 
import { filterUsersBy } from '../../actions/user_actions';
import MainPage from './main_page';

const mSTP = state =>{
  return({
    usersToDisplay: state.users,
    myId: state.session.user.id
  })
}

const mDTP = dispatch =>{
  return({
    filterUsersBy: (filter, value)=>dispatch(filterUsersBy(filter, value))
  })
}

const MainPageContainer = connect(mSTP, mDTP)(MainPage); 
export default MainPageContainer; 