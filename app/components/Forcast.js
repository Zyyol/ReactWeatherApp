var React = require('react');
var helpers = require('../utils/helpers')

function puke (obj) {
  return (
    <pre>{JSON.stringify(obj, null, ' ')}</pre>
  )
};

function DayItem (props) {
  var date = getDate(props.day.dt)
  var icon = props.day.weather[0].icon
  return (
    a
  )
}



function Forcast (props) {
  return (
    <div>
      {
        props.isLoading === true ?
          <h1 style={{fontSize: "55px", fontWeight: "120"}}> Loading </h1> :
        <div style={props.style}>
          {props.city}
        </div>
      }
    </div>
  )
}

module.exports = Forcast;
