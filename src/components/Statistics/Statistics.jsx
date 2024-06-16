import Notification from '../Notification/Notification';
import styles from './Statistic.module.scss';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  if (total === 0) {
    return <Notification className={styles.notification}></Notification>;
  }
  return (
    <div className={styles.statistic}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage} %</p>
    </div>
  );
};

export default Statistic;
