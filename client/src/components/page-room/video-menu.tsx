import { useEffect, useState } from 'react';
import MediaStreamManager from '../../utils/media-stream-manager';
import SnackBar from '../common/snack-bar';
import SoundOffIcon from '../icons/sound-off';
import SoundOnIcon from '../icons/sound-on';
import VideoOffIcon from '../icons/video-off';
import VideoOnIcon from '../icons/video-on';
import styles from './video-menu.module.css';

type Props = {
  audioStatus: boolean;
  videoStatus: boolean;
  handleChangeVideoStatus: () => void;
  handleChangeAudioStatus: () => void;
};

function VideoMenu({ audioStatus, videoStatus, handleChangeVideoStatus, handleChangeAudioStatus }: Props) {
  const [snackbarStatus, setSnackbar] = useState(false);

  useEffect(() => {
    if (snackbarStatus) {
      setTimeout(() => setSnackbar(false), 3000);
    }
  }, [snackbarStatus]);

  function handleClickInviteBtn() {
    navigator.clipboard.writeText(window.location.href);
    setSnackbar(true);
  }

  function handleClickEndBtn() {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Leave the room')) {
      window.location.replace(window.location.origin);
    }
  }

  return (
    <>
      {<SnackBar text="Invite Link Copied" bgColor="darkslategrey" textColor="#f5f5f5" status={snackbarStatus} />}
      <div className={styles.menu}>
        <div className={styles.btns}>
          <div className={styles.btns_left}>
            <button className={`${styles.btn__sound} ${audioStatus && styles.on}`} onClick={handleChangeAudioStatus}>
              {audioStatus ? (
                <SoundOffIcon width="1.25rem" height="1.25rem" />
              ) : (
                <SoundOnIcon width="1.25rem" height="1.25rem" />
              )}
            </button>
            <button className={`${styles.btn__video} ${videoStatus && styles.on}`} onClick={handleChangeVideoStatus}>
              {videoStatus ? (
                <VideoOffIcon width="1.25rem" height="1.25rem" />
              ) : (
                <VideoOnIcon width="1.25rem" height="1.25rem" />
              )}
            </button>
          </div>

          <div className={styles.btns_right}>
            <button className={styles.btn__invite} onClick={handleClickInviteBtn}>
              Invite
            </button>
            <button className={styles.btn__end} onClick={handleClickEndBtn}>
              End
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoMenu;
