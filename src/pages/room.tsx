import ChatSection from '../components/page-room/chat-section';
import VideoSection from '../components/page-room/video-section';
import styles from './room.module.css';

type Props = {};

function RoomPage({}: Props) {
  return (
    <>
      <div className={styles.page__container}>
        <div className={styles.section__container}>
          <VideoSection />
          <ChatSection />
        </div>
      </div>
    </>
  );
}

export default RoomPage;
