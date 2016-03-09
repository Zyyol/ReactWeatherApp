var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Home = require('../components/Home');
var ForcastContainer = require('../containers/ForcastContainer');
var Details = require('../components/Details');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='/forcast/:city' component={ForcastContainer} />
      <Route path='/detail/:city' component={Details} />
    </Route>
  </Router>
);

module.exports = routes;
