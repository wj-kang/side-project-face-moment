import styles from './spinner.module.css';

interface SpinnerProps {
  isOn: boolean;
  message: string;
}

const Spinner = ({ isOn, message = '' }: SpinnerProps) => {
  return (
    <div className={`${styles.dimmer} ${isOn && styles.isOn}`}>
      <div className={styles.loader}></div>
      <div className={styles.message}>{message}</div>
    </div>
  );
};

export default Spinner;
