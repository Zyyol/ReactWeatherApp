var React = require('react');
var styles = require('../styles');
var getDate = require('../utils/helpers').getDate

function DayItem (props) {
  var date = getDate(props.day.dt);
  var icon = props.day.weather[0].icon;
  return (
    <div style={styles.dayItem} onClick={props.onClick}>
      <img style={{height: 130}} src={'./app/images/' + icon + '.svg'} />
      <h2>{date}</h2>
    </div>
  )
};

module.exports = DayItem;
