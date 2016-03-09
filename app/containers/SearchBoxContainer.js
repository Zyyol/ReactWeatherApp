var React = require('react');
var SearchBox = require('../components/SearchBox');
var getWeather = require('../utils/helpers').getWeather

var SearchBoxContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      city: ''
    }
  },
  handleUpdateCity: function (e) {
    var city = e.target.value
    this.setState({
      city: city
    })
  },
  handleSubmitCity: function () {
    this.context.router.push('/forcast/' + this.state.city);
  },
  render: function () {
    return (
      <SearchBox
        style={this.props.style}
        marginBtn={this.props.marginBtn}
        onUpdateCity={this.handleUpdateCity}
        onSubmitCity={this.handleSubmitCity}
      />
    )
  }
});

module.exports = SearchBoxContainer;
