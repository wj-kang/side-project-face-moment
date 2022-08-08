import styles from './video-menu.module.css';

type Props = {};

function VideoMenu({}: Props) {
  return (
    <>
      <div className={styles.menu}>
        <div className={styles.btns}>
          <button className={styles.btn__sound}>Unmute</button>
          <button className={styles.btn__video}>Start Video</button>
          <button className={styles.btn__invite}>Invite</button>
          <button className={styles.btn__end}>End</button>
        </div>
      </div>
    </>
  );
}

export default VideoMenu;
