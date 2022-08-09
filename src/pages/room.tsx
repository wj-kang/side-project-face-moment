import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SocketContext } from '../context/socket';
import styles from './room.module.css';

import { Socket } from 'socket.io-client';
import ChatSection from '../components/page-room/chat-section';
import VideoSection from '../components/page-room/video-section';

type Props = {};

function RoomPage({}: Props) {
  const socket: Socket = useContext(SocketContext);
  const { roomId } = useParams();

  useEffect(() => {
    socket.connect().emit('join_room', roomId, handleJoinRoom);
  }, []);

  function handleJoinRoom(result: boolean): void {
    if (result) {
      console.log('join success');
    } else {
      console.log('fail');
      // Redirect to error page
    }
  }

  socket.on('welcome', () => console.log('good'));

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
