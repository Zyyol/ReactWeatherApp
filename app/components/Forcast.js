var React = require('react');
var getDate = require('../utils/helpers').getDate
var Loading = require('./Loading');
var styles = require('../styles');


function DayItem (props) {
  var date = getDate(props.day.dt)
  var icon = props.day.weather[0].icon
  return (
    <div style={styles.dayItem}>
      <img style={{height: 130}} src={'./app/images/' + icon + '.svg'} />
      <h2>{date}</h2>
    </div>
  )
}

function Forcast (props) {
  return (
    props.isLoading === true ?
    <div style={props.home} className="text-center">
      <Loading />
    </div>
    :
    <div className="text-center">
      <h1 style={{fontSize: "60px", color: "#FFF", fontWeight: "100"}}>{props.cityData.city.name}</h1>
      <div style={props.style}>
        {props.cityData.list.map(function (item)
          { return <DayItem key={item.dt} day={item} /> })
        }
      </div>
    </div>
  )
}

module.exports = Forcast;
