import { connect } from 'react-redux';
import Dashboard from './dashboard';

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser
  };
};

export default connect(mapStateToProps)(Dashboard);
