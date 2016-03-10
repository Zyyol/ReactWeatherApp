var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var styles = require('../styles');
var SearchBoxContainer = require('../containers/SearchBoxContainer');

var Home = React.createClass({
  render: function () {
    return (
      <div className="container" style={styles.home}>
        <h1 style={{fontSize: "55px", fontWeight: "120", color: "#FFF"}}>Enter a city :)</h1>
        <SearchBoxContainer style={styles.inputHome} marginBtn={{marginTop: "10px"}}/>
      </div>
    )
  }
});

module.exports = Home;
