import React from 'react'
import styles from '../styles'
import { getDate } from '../utils/helpers'

function DayItem (props) {
  const date = getDate(props.day.dt);
  const icon = props.day.weather[0].icon;
  return (
    <div style={styles.dayItem} onClick={props.onClick}>
      <img style={{height: 130}} src={'./app/images/' + icon + '.svg'} />
      <h2>{date}</h2>
    </div>
  )
};

export default DayItem
