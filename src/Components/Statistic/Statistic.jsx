/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import Icon from '../Icon/Icon';
import styles from './Statistic.module.css';

const Statistic = ({ name, icon, value, sign }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background}></div>
      <div className={styles.inner}>
        <Icon className={styles.icon} color="#DAD8F7" icon={icon} />
        <div className={styles.name}>
          {name}
        </div>
        <div className={styles.values}>
          <span>{value}</span>
          <span className={styles.sign}>{sign}</span>
        </div>
      </div>
    </div>
  )
}
export default Statistic