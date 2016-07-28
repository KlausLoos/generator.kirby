import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import FilterContainer from './components/FilterContainer';
import Item from './components/Item';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={FilterContainer}></Route>
    <Route path="/item/:slug" component={Item}></Route>
  </Router>
);
