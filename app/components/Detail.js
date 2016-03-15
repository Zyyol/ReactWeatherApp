import React from 'react'
import { convertTemp } from '../utils/helpers'
import styles from '../styles'
import DayItem from './DayItem'

function Detail ({weather, city}) {
  return (
      <div style={styles.detail}>
        <DayItem day={weather}/>
        <h2>{city.capitalize()}</h2>
        <p>{weather.weather[0].description}</p>
        <p>min temp: {convertTemp(weather.temp.min)} degrees</p>
        <p>max temp: {convertTemp(weather.temp.max)} degrees</p>
        <p>humidity: {weather.humidity}</p>
      </div>
  )
}

export default Detail
