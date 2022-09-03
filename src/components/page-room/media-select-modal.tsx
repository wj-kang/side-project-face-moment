import MediaStreamManager from '../../utils/media-stream-manager';
import MediaSelect from './media-select';
import styles from './media-select-modal.module.css';

type Props = {
  streamManager: MediaStreamManager | undefined;
  handleClose: () => void;
};

function MediaSelectModal({ streamManager, handleClose }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.dimmer}>
        <div className={styles.box}>
          <button className={styles.close_btn} onClick={handleClose}>
            Done
          </button>
          <h2>Media Setting</h2>

          <h3>Video</h3>
          <MediaSelect streamManager={streamManager} type="video" />

          <h3>Audio</h3>
          <MediaSelect streamManager={streamManager} type="audio" />
        </div>
      </div>
    </div>
  );
}

export default MediaSelectModal;
