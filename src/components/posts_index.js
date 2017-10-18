import React, { Component } from 'react';
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions/index';
import {Link} from 'react-router';

class PostsIndex extends Component {
  
componentWillMount(){
  this.props.fetchPosts();
  console.log('call action createor to fetch post')
}

  render(){
    return(
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add post
          </Link>
      </div>
        Listsssss
      </div>
    )
  }
}


function  mapDispatchToProps  (dispatch, ownProps)  {
  return bindActionCreators({fetchPosts}, dispatch)
}


export default connect(null,mapDispatchToProps)(PostsIndex);