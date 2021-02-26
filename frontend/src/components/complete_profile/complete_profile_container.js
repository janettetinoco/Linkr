import {connect} from 'react-redux';
import {completeProfile} from '../../actions/profile_actions'; 
import CompleteProfile from './complete_profile'; 
const mSTP = state => {
  return ({
    myId: state.session.user.id
  })
}

const mDTP = dispatch => {
  return ({
    completeProfile: (profile)=> dispatch(completeProfile(profile))

  })
}
const CompleteProfileContainer = connect(mSTP, mDTP)(CompleteProfile);
export default CompleteProfileContainer; 