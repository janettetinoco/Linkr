import {connect} from 'react-redux'; 
import { filterUsersBy } from '../../actions/user_actions';
import Profile from './profile';

const mSTP = state =>{
  return({
    usersToDisplay: state.users
  })
}

const mDTP = dispatch =>{
  return({
    filterUsersBy: (filter, value)=>dispatch(filterUsersBy(filter, value))
  })
}

const ProfileContainer = connect(mSTP, mDTP)(Profile); 
export default ProfileContainer; 