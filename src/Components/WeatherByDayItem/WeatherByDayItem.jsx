/* eslint-disable react/prop-types */
import styles from './WeatherByDayItem.module.css';

const WeatherByDayItem = ({ day, temperatureMin, temperatureMax }) => {
  return (
    <div className={styles.card}>
      <h5 className={styles.title}>{day}</h5>
      <img className={styles.img} src='src/assets/WeatherIcons/sun.svg' alt=''/>
      <div className={styles.temperature}>
        <span className={styles.temperatureMax}>{temperatureMax}°</span>
        <span className={styles.temperatureMin}>{temperatureMin}°</span>
      </div>
    </div>
  )
}
export default WeatherByDayItem