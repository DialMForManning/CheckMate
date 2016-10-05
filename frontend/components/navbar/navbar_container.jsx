import { connect } from 'react-redux';
import { login, logout, clearErrors } from '../../actions/session_actions';
import Navbar from './navbar';

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser,
    errors: session.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return({
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
