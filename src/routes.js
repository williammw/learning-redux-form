import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import postIndex from './components/posts_index';
import PostsNew from './components/posts_new';

const Greeting =() =>{
  return (<h1>HI BLOG POT</h1>);
}


export default(
  <Route path="/" component={App} >
    <IndexRoute component={postIndex} />
    <Route path="/posts/new" component={PostsNew} />
  </Route>

)