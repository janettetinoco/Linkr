import { connect } from 'react-redux';
import { closeModal, openModal } from '../../actions/modal_actions';
import { login, resetErrors } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    loggedIn: state.session.isAuthenticated
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    resetErrors: () => dispatch(resetErrors()),
    signupForm: (
      <div className="switch-form" onClick={() => dispatch(openModal('signup'))}>
        Sign up here
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);