var React = require('react');

function puke (obj) {
  return (
    <pre>{JSON.stringify(obj, null, ' ')}</pre>
  )
};

var Results = React.createClass({
  getInitialState: function () {
    return {
      data: {}
    }
  },
  render: function () {
    return (
      <div>
        {puke(this.props.location.state)}
      </div>
    )
  }
})

module.exports = Results;
