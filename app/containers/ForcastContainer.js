var React = require('react');
var Forcast = require('../components/Forcast');
var styles = require('../styles')
var getWeather = require('../utils/helpers').getWeather

var ForcastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      cityData: {}
    }
  },
  componentDidMount: function () {
    this.makeRequest(this.props.routeParams.city)
  },
  componentWillReceiveProps: function (nextProps) {
    this.makeRequest(nextProps.routeParams.city)
  },
  makeRequest: function (city) {
    getWeather(city).then(function (data) {
      this.setState({
        isLoading: false,
        cityData: data
      })
    }.bind(this))
  },
  render: function () {
    return (
      <Forcast
        city={this.props.routeParams.city}
        isLoading={this.state.isLoading}
        style={styles.forcast}
        cityData={this.state.cityData}
      />
    )
  }
});

module.exports = ForcastContainer;
