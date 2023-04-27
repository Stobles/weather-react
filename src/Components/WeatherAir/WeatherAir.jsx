import Icon from '../Icon/Icon';
import styles from './WeatherAir.module.css';

const WeatherAir = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h3 className={styles.title}>
          <Icon className={styles.icon} color="#DAD8F7" size={28} icon="leaf"/>
          <span>Air pollution level</span>
        </h3>
        <div className={styles.qualityWrapper}>
          <span className={styles.quality}>Good</span>
          <span className={styles.qualityNumber}>21</span>
        </div>
        <div className={styles.characteristics}>
          <div className={styles.characteristicsItem}>
            <span className={styles.characteristicsNumber}>12.9</span>
            <span className={styles.characteristicsText}>PM2.5</span>
          </div>
          <div className={styles.characteristicsItem}>
            <span className={styles.characteristicsNumber}>12.9</span>
            <span className={styles.characteristicsText}>PM10</span>
          </div>
          <div className={styles.characteristicsItem}>
            <span className={styles.characteristicsNumber}>12.9</span>
            <span className={styles.characteristicsText}>SO₂</span>
          </div>
          <div className={styles.characteristicsItem}>
            <span className={styles.characteristicsNumber}>12.9</span>
            <span className={styles.characteristicsText}>NO₂</span>
          </div>
          <div className={styles.characteristicsItem}>
            <span className={styles.characteristicsNumber}>12.9</span>
            <span className={styles.characteristicsText}>O₃</span>
          </div>
          <div className={styles.characteristicsItem}>
            <span className={styles.characteristicsNumber}>12.9</span>
            <span className={styles.characteristicsText}>CO</span>
          </div>
        </div>
      </div>
    </section>
  )
}
export default WeatherAir