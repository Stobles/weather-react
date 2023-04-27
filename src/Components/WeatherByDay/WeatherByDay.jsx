import WeatherByDayItem from '../WeatherByDayItem/WeatherByDayItem';
import styles from './WeatherByDay.module.css';

const WeatherByDay = () => {
  const days = [
    {
      day: 'Monday',
      day_info: '28 авг',
      icon_id: 'sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно',
    },
    {
      day: 'Segunda-feira',
      day_info: '29 авг',
      icon_id: 'small_rain_sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'небольшой дождь и солнце',
    },
    {
      day: 'Sexta-feira',
      day_info: '30 авг',
      icon_id: 'small_rain',
      temp_day: '+18',
      temp_night: '+15',
      info: 'небольшой дождь',
    },
    {
      day: 'Sábado',
      day_info: '28 авг',
      icon_id: 'mainly_cloudy',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно',
    },
    {
      day: 'Domingo',
      day_info: '28 авг',
      icon_id: 'rain',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно',
    },
  ];
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {days.map(({day, temp_day, temp_night}) => (
          <WeatherByDayItem key={day} day={day} temperatureMax={temp_day} temperatureMin={temp_night}/>
        ))}
        
      </div>
    </section>
  )
}
export default WeatherByDay;