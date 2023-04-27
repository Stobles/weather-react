import WeatherByDay from '@comp/WeatherByDay/WeatherByDay';
import styles from './HomePage.module.css';
import WeatherToday from '@comp/WeatherToday/WeatherToday';
import WeatherAir from '../../Components/WeatherAir/WeatherAir';
import WeatherTime from '../../Components/WeatherTime/WeatherTime';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import Loader from '../../components/Loader/Loader';

const HomePage = () => {
  const dispatch = useDispatch();
  const isLoadingToday = useSelector((state) => state.currentWeatherSliceReducer.isLoading);
  useEffect(() => {
    dispatch(fetchCurrentWeather({lat: '48.864716', lon: '2.349014'}));
  }, [])
  return (
    <div className={styles.home}>
      <div className={styles.background}></div>
      <div className={styles.wrapper}>
        {isLoadingToday ? (
          <div className={styles.loaderToday}>
            <Loader color='#DAD8F7' size={150}/>
          </div>
          
        ) : (
          <WeatherToday />
        )}
        
        <WeatherAir />
        <WeatherByDay />
        <WeatherTime />
      </div>
    </div>
  )
}
export default HomePage