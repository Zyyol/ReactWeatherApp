var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function SearchBox (props) {
  return (
    <div style={props.style}>
      <input type="text" className="form-control" onChange={props.onUpdateCity} />
      <button type="submit" className="btn btn-success" style={props.marginBtn} onClick={props.onSubmitCity}>Search</button>
    </div>
  )
}

module.exports = SearchBox;
