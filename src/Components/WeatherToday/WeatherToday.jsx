import Icon from '../Icon/Icon';
import styles from './WeatherToday.module.css';

const WeatherToday = () => {
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
            <span className={styles.temperatureNow}>18</span> °C
          </div>
          <div className={styles.temperatureMinMax}>
            <span>22°</span>
            <span className={styles.temperatureMin}>16°</span>
          </div>
        </div>
        
      </div>
    </section>
  )
}
export default WeatherToday