import styles from './snack-bar.module.css';

type Props = {
  text: string;
  bgColor: string;
  textColor?: string;
  status: boolean;
};

function SnackBar({ text, bgColor, textColor, status }: Props) {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.snackbar} ${status && styles.on}`}
        style={{ background: bgColor, color: textColor || '' }}
      >
        <div>{text}</div>
      </div>
    </div>
  );
}

export default SnackBar;
