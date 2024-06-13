import Notification from 'components/Notification/Notification';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  if (total === 0) {
    return <Notification></Notification>;
  }
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage} %</p>
    </div>
  );
};

export default Statistic;
