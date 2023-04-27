/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import Icon from '../Icon/Icon';
import Statistic from '../Statistic/Statistic';
import styles from './WeatherToday.module.css';
import { selectCurrentWeatherData } from '../../store/selectors';

const WeatherToday = () => {
  const { weather } = useSelector(selectCurrentWeatherData);

  const tempNow = Math.round(weather?.main?.temp);

  return (
    <section className={styles.section}>
      <img 
        className={styles.clouds} 
        src='src/assets/HomePage/clouds.svg' 
        alt='clouds'
      />
      <div className={styles.backgroundWrapper}>
        <img 
          className={styles.backgroundImg}
          src='src/assets/HomePage/background.jpg' 
          alt='TodayBackground'
        />
      </div>
      <div className={styles.wrapper}>
        <p className={styles.location}>
          <Icon className={styles.icon} color="#9D99E4" size={30} icon="pin"/>
          Rio do Sul, SC
        </p>
        <div className={styles.temperatureWrapper}>
          <div className={styles.temperature}>
            <span className={styles.temperatureNow}>{tempNow}</span> °C
          </div>
          <div className={styles.temperatureMinMax}>
            <span>22°</span>
            <span className={styles.temperatureMin}>16°</span>
          </div>
        </div>
        <div className={styles.statisticWrapper}>
          <Statistic name='Wind' icon='wind' value='17' sign='Km/h'/>
          <Statistic name='Humidity' icon='blob' value='32' sign='%'/>
          <Statistic name='Rain' icon='weather' value='10' sign='%'/>
        </div>
      </div>
    </section>
  )
}
export default WeatherToday