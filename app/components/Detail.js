var React = require('react');
var convertTemp = require('../utils/helpers').convertTemp
var style = require('../styles')
var DayItem = require('./DayItem');

function Detail (props) {
  return (
      <div style={style.detail}>
        <DayItem day={props.weather}/>
        <h2>{props.city.capitalize()}</h2>
        <p>{props.weather.weather[0].description}</p>
        <p>min temp: {convertTemp(props.weather.temp.min)} degrees</p>
        <p>max temp: {convertTemp(props.weather.temp.max)} degrees</p>
        <p>humidity: {props.weather.humidity}</p>
      </div>
  )
};

module.exports = Detail;
