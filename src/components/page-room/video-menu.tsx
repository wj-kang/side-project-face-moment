import styles from './video-menu.module.css';

type Props = {
  audioStatus: boolean;
  videoStatus: boolean;
  handleChangeVideoStatus: () => void;
  handleChangeAudioStatus: () => void;
};

function VideoMenu({ audioStatus, videoStatus, handleChangeVideoStatus, handleChangeAudioStatus }: Props) {
  return (
    <>
      <div className={styles.menu}>
        <div className={styles.btns}>
          <button className={styles.btn__sound} onClick={handleChangeAudioStatus}>
            {audioStatus ? 'Mute' : 'Unmute'}
          </button>
          <button className={styles.btn__video} onClick={handleChangeVideoStatus}>
            {videoStatus ? 'Stop Video' : 'Start Video'}
          </button>
          <button className={styles.btn__invite}>Invite</button>
          <button className={styles.btn__end}>End</button>
        </div>
      </div>
    </>
  );
}

export default VideoMenu;
