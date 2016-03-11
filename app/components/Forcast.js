var React = require('react');
var Loading = require('./Loading');
var styles = require('../styles');
var DayItem = require('./DayItem');

function Forcast (props) {
  return (
    props.isLoading === true ?
    <div style={styles.home} className="text-center">
      <Loading />
    </div>
    :
    <div className="text-center">
      <h1 style={{fontSize: "80px", color: "#FFF", fontWeight: "150"}}>{props.cityData.city.name}</h1>
      <div style={styles.forcast}>
        {props.cityData.list.map(function (item)
          { return <DayItem key={item.dt} day={item} onClick={props.onClickDetail.bind(null, item)} /> })
        }
      </div>
    </div>
  )
}

module.exports = Forcast;
