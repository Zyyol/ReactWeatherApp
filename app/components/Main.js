var React = require('react');
var styles = require('../styles');
require('../main.css');
var SearchBoxContainer = require('../containers/SearchBoxContainer');

var Main = React.createClass({
  render: function () {
    return (
      <div className='main-container' style={{width: "100%", height: "70%"}}>
        <div className="header" style={styles.header}>
          <h2 style={{marginLeft: "10px", color: "#FFF"}}>Weather App</h2>
          <SearchBoxContainer style={styles.inputHeader} marginBtn={{marginRight: "5px", marginLeft: "10px"}}/>
        </div>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
