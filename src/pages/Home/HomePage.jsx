import WeatherByDay from '@comp/WeatherByDay/WeatherByDay';
import styles from './HomePage.module.css';
import WeatherToday from '@comp/WeatherToday/WeatherToday';
import WeatherAir from '../../Components/WeatherAir/WeatherAir';
import WeatherTime from '../../Components/WeatherTime/WeatherTime';

const HomePage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.background}></div>
      <div className={styles.wrapper}>
        <WeatherToday />
        <WeatherAir />
        <WeatherByDay />
        <WeatherTime />
      </div>
    </div>
  )
}
export default HomePage