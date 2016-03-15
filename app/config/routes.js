import React from 'react'
import ReactRouter, { Route, Router, IndexRoute, hashHistory} from 'react-router'
import Main from '../components/Main'
import Home from '../components/Home'
import ForcastContainer from '../containers/ForcastContainer'
import DetailContainer from '../containers/DetailContainer'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='/forcast/:city' component={ForcastContainer} />
      <Route path='/detail/:city' component={DetailContainer} />
    </Route>
  </Router>
);

export default routes
