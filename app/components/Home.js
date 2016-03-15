import React from 'react'
import { Link } from 'react-router'
import styles from '../styles'
import SearchBoxContainer from '../containers/SearchBoxContainer'

function Home () {
  return (
    <div className="container" style={styles.home}>
      <h1 style={{fontSize: "55px", fontWeight: "120", color: "#FFF"}}>Enter a city :)</h1>
      <SearchBoxContainer styles={styles.inputHome} marginBtn={{marginTop: "10px"}}/>
    </div>
  )
}

export default Home
