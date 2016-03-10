var React = require('react');
var styles = require('../styles')
var Detail = require('../components/Detail')

var DetailContainer = React.createClass({
  render: function () {
    return (
      <Detail
        style={styles.forcast}
        weather={this.props.location.state.weather}
        city={this.props.routeParams.city}
      />
    )
  }
})

module.exports = DetailContainer;
