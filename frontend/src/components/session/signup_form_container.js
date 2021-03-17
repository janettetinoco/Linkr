import { connect } from 'react-redux';
import { closeModal, openModal } from '../../actions/modal_actions';
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
    openModal: (modal) => dispatch(openModal(modal)),
    signup: user => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    resetErrors: () => dispatch(resetErrors()),
    login: user=> dispatch(login(user)),
    uploadImage: image => dispatch(uploadImage(image)),
    loginForm: (
      <a className="switch-form" onClick={() => dispatch(openModal('login'))}>
        Sign in here
      </a>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);

