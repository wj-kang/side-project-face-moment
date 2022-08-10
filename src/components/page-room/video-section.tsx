import { useContext, useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import { SocketContext } from '../../context/socket';
import MediaStreamManager from '../../utils/media-stream-manager';
import VideoMenu from './video-menu';
import styles from './video-section.module.css';

type Props = {
  streamManager: MediaStreamManager;
};

function VideoSection({ streamManager }: Props) {
  const socket: Socket = useContext(SocketContext);
  const [audioStatus, setAudioStatus] = useState<boolean>(false);
  const [videoStatus, setVideoStatus] = useState<boolean>(false);

  useEffect(() => {
    streamManager.toggleCurrentAudioStatus();
  }, [audioStatus]);

  useEffect(() => {
    streamManager.toggleCurrentVideoStatus();
  }, [videoStatus]);

  function handleChangeVideoStatus() {
    setVideoStatus((prev) => !prev);
  }

  function handleChangeAudioStatus() {
    setAudioStatus((prev) => !prev);
  }

  return (
    <section className={styles.section}>
      <div className={styles.video__container}>
        <video id="video__my" autoPlay={true} playsInline={true} className={styles.video__stream__my}></video>
        {/* <video id="video__peer" className={styles.video__stream__peer}></video> */}
      </div>
      <VideoMenu //
        audioStatus={audioStatus}
        videoStatus={videoStatus}
        handleChangeVideoStatus={handleChangeVideoStatus}
        handleChangeAudioStatus={handleChangeAudioStatus}
      />
    </section>
  );
}

export default VideoSection;
