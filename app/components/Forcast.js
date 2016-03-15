import React from 'react'
import Loading from './Loading'
import styles from '../styles'
import DayItem from './DayItem'

function Forcast ({isLoading, onClickDetail, cityData}) {
  return (
    isLoading === true ?
    <div style={styles.home} className="text-center">
      <Loading />
    </div>
    :
    <div className="text-center">
      <h1 style={{fontSize: "80px", color: "#FFF", fontWeight: "150"}}>{cityData.city.name}</h1>
      <div style={styles.forcast}>
        {cityData.list.map(function (item)
          { return <DayItem key={item.dt} day={item} onClick={onClickDetail.bind(null, item)} /> })
        }
      </div>
    </div>
  )
}

export default Forcast
