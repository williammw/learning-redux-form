import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';


const Greeting =() =>{
  return (<h1>死全家蔡育基佬</h1>);
}


export default(
  <Route path="/" component={App} >
    <Route path="greet" component={Greeting} />
    <Route path="greet2" component={Greeting} />
    <Route path="greet4" component={Greeting} />
  </Route>

)