import { connect } from 'react-redux';

import SplashScreen from './splash';
import ASYNC from '../../../util/async_util.js';
import { receiveLocation, receiveGooglePlaces } from '../../../actions/location_actions';

const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveLocation: location => dispatch(receiveLocation(location)),
    receiveGooglePlaces: places => dispatch(receiveGooglePlaces(places)),
    setItem: ASYNC.setItem,
    getItem: ASYNC.getItem,
    removeItem: ASYNC.removeItem
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
