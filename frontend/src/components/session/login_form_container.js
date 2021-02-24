import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { login, resetErrors } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal),
    resetErrors: () => dispatch(resetErrors())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);