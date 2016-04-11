import React from 'react'
import { Link } from 'react-router'

function SearchBox ({onUpdateCity, onSubmitCity, city, marginBtn, styles}) {
  return (
    <div style={styles}>
      <input type="text" className="form-control" onChange={onUpdateCity} value={city} style={{textAlign: 'center'}} />
      <button type="submit" className="btn btn-success" style={marginBtn} onClick={onSubmitCity}>Search</button>
    </div>
  )
}

export default SearchBox
