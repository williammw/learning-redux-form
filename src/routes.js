import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import postIndex from './components/posts_index';

const Greeting =() =>{
  return (<h1>HI BLOG POT</h1>);
}


export default(
  <Route path="/" component={App} >
    <IndexRoute component={postIndex} />
    <Route path="greet" component={Greeting} />
    <Route path="greet2" component={Greeting} />
    <Route path="greet4" component={Greeting} />
  </Route>

)