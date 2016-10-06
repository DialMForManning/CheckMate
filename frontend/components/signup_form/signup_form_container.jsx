import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({ session }) => {
  debugger
  return({
    loggedIn: !!session.currentUser,
    errors: session.errors
  })
};

const mapDispatchToProps = (dispatch) => {
  return({
    signup: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
