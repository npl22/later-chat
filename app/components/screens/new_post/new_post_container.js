import { connect } from 'react-redux';

import { createPost } from '../../../actions/posts_actions';
import NewPost from './new_post';

const mapStateToProps = (state) => ({
  posts: state.posts,
  currentUser: state.session.currentUser,
  photo: state.photo,
  location: state.location
  
})

const mapDispatchToProps = (dispatch) => ({
  createPost: post => dispatch(post(post))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPost)
