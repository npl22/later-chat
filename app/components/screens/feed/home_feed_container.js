import { connect } from 'react-redux';
import { requestAllPosts } from '../../../actions/posts_actions';
import { followedPosts } from '../../../reducers/selectors';
import HomeFeed from './home_feed';

// TODO: make sure this is passing the array of followers and the posts correctly, once we set up that slice of state
const mapStateToProps = (state) => {

  let leaders = []
  Object.keys(state.session.currentUser.leaders).forEach((leaderId) => leaders.push(parseInt(leaderId)))
  return {
    home: '',
    posts: followedPosts(state.posts, leaders),
    currentUser: state.session.currentUser,
    location: state.location
  }
};

const mapDispatchToProps = (dispatch) => ({
  getFeed: locations => dispatch(requestAllPosts(locations))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeFeed);
