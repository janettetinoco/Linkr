import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { signup, resetErrors, login } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { uploadImage } from '../../actions/image_actions';

const mapStateToProps = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session,
    openModal: state.modal
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: user => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    resetErrors: () => dispatch(resetErrors()),
    login: user=> dispatch(login(user)),
    uploadImage: image => dispatch(uploadImage(image))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);

