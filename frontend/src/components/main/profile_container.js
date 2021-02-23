import {connect} from 'react-redux'; 
import { populateNearByUsers } from '../../actions/user_actions';
import Profile from './profile';

const mSTP = state =>{
  return({

  })
}

const mDTP = dispatch =>{

  return({
    getUsersByCity: city=>populateNearByUsers(city)
  })
}

const ProfileContainer = connect(mSTP, mDTP)(Profile); 
export default ProfileContainer; 