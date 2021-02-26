import {connect} from 'react-redux';
import {completeProfile, resetErrors} from '../../actions/profile_actions'; 
import CompleteProfile from './complete_profile'; 
const mSTP = state => {
  return ({
    errors: state.errors.profile
  })
}

const mDTP = dispatch => {
  return ({
    resetErrors: () => dispatch(resetErrors()),
    completeProfile: (profile)=> dispatch(completeProfile())

  })
}

export default connect(mSTP, mDTP)(CompleteProfile);