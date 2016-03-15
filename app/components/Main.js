import React from 'react'
import styles from '../styles'
import '../main.css'
import SearchBoxContainer from '../containers/SearchBoxContainer'

function Main ({children}) {
  return (
    <div className='main-container' style={{width: "100%", height: "70%"}}>
      <div className="header" style={styles.header}>
        <h2 style={{marginLeft: "10px", color: "#FFF"}}>Weather App</h2>
        <SearchBoxContainer styles={styles.inputHeader} marginBtn={{marginRight: "5px", marginLeft: "10px"}}/>
      </div>
      {children}
    </div>
  )
}

export default Main
