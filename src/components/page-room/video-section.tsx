import VideoMenu from './video-menu';
import styles from './video-section.module.css';

type Props = {};

function VideoSection({}: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.video__container}>
        <video id="video__my" className={styles.video__stream__my}></video>
        <video id="video__peer" className={styles.video__stream__peer}></video>
      </div>
      <VideoMenu />
    </section>
  );
}

export default VideoSection;
