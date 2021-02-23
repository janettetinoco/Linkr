import {connect} from 'react-redux'; 
import { getUsersByCity } from '../../util/user_api_util';
import Profile from './profile';

const mSTP = state =>{
  return({

  })
}

const mDTP = dispatch =>{

  return({
    getUsersByCity: city=>getUsersByCity(city)
  })
}

const ProfileContainer = connect(mSTP, mDTP)(Profile); 
export default ProfileContainer; 