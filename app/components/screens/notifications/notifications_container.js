import { connect } from 'react-redux';

import Notifications from './notifications';

import { receiveLocation, receiveGooglePlaces } from '../../../actions/location_actions';
import { requestSearch, clearSearchResults } from '../../../actions/search_users_actions';

const mapStateToProps = ( state ) => {
  return {
    location: state.location
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveLocation: location => dispatch(receiveLocation(location)),
    requestSearch: searchStr => dispatch(requestSearch(searchStr)),
    clearResults: () => dispatch(clearSearchResults())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
