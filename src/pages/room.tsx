import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SocketContext } from '../context/socket';
import MediaStreamManager from '../utils/media-stream-manager';
import styles from './room.module.css';

import { Socket } from 'socket.io-client';
import ChatSection from '../components/page-room/chat-section';
import VideoSection from '../components/page-room/video-section';

type Props = {};

function RoomPage({}: Props) {
  const streamManager = new MediaStreamManager();
  const socket: Socket = useContext(SocketContext);
  const { roomId } = useParams();

  useEffect(() => {
    socket.connect().emit('join_room', roomId, (result: boolean) => {
      if (result) {
        console.log('join success');
      } else {
        console.log('fail');
        // Redirect to error page
      }
    });

    // init media stream
    streamManager
      .getMedia() //
      .then(() => streamManager.setStreamIntoElement(document.querySelector('#video__my')!));
  }, []);

  return (
    <>
      <div className={styles.page__container}>
        <div className={styles.section__container}>
          <VideoSection streamManager={streamManager} />
          <ChatSection />
        </div>
      </div>
    </>
  );
}

export default RoomPage;
