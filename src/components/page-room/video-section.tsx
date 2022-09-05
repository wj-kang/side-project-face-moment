import { useEffect, useState } from 'react';
import MediaStreamManager from '../../utils/media-stream-manager';
import WebRTCManager from '../../utils/web-rtc-manager';
import FlipIcon from '../icons/flip-icon';
import VideoMenu from './video-menu';
import styles from './video-section.module.css';

type Props = {
  streamManager: MediaStreamManager | undefined;
  rtcManager: WebRTCManager | undefined;
  isConnected: boolean;
};

function VideoSection({ streamManager, rtcManager, isConnected }: Props) {
  const [audioStatus, setAudioStatus] = useState<boolean>(false);
  const [videoStatus, setVideoStatus] = useState<boolean>(false);

  useEffect(() => {
    if (!streamManager) return;
    streamManager.toggleCurrentAudioStatus();
  }, [audioStatus]);

  useEffect(() => {
    if (!streamManager) return;
    streamManager.toggleCurrentVideoStatus();
  }, [videoStatus]);

  function handleChangeVideoStatus() {
    setVideoStatus((prev) => !prev);
  }

  function handleChangeAudioStatus() {
    setAudioStatus((prev) => !prev);
  }

  function handleChangeVideoPosition() {
    const myVideo: HTMLVideoElement = document.querySelector('#video__my')!;
    const myVideoSrc = myVideo.srcObject;
    const peerVideo: HTMLVideoElement = document.querySelector('#video__peer')!;
    const peerVideoSrc = peerVideo.srcObject;
    myVideo.id = 'video__peer';
    myVideo.srcObject = peerVideoSrc;
    peerVideo.id = 'video__my';
    peerVideo.srcObject = myVideoSrc;
  }

  return (
    <section className={styles.section}>
      <div className={styles.video__container}>
        <div className={styles.video__message__box}>
          {isConnected ? (
            <>
              <div className={styles.video__message__sign__on}></div>
              <div>Connected</div>
            </>
          ) : (
            <>
              <div className={styles.video__message__sign__off}></div>
              <div>No user connection</div>
            </>
          )}
        </div>

        <video id="video__peer" autoPlay={true} playsInline={true} className={styles.video__stream}></video>

        <div className={styles.float__container} onClick={handleChangeVideoPosition}>
          <FlipIcon width="1rem" height="1rem" />
          <video id="video__my" autoPlay={true} playsInline={true} className={styles.video__stream__float}></video>
        </div>
      </div>
      <VideoMenu //
        streamManager={streamManager}
        audioStatus={audioStatus}
        videoStatus={videoStatus}
        handleChangeVideoStatus={handleChangeVideoStatus}
        handleChangeAudioStatus={handleChangeAudioStatus}
      />
    </section>
  );
}

export default VideoSection;
