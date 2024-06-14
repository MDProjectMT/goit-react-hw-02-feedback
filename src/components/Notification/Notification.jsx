import styles from './Notification.module.scss';

const Notification = ({ message }) => {
  return (
    <div className={styles.notification}>
      {(message = 'There is no feedback')}
    </div>
  );
};

export default Notification;
