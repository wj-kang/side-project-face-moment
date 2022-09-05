import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SocketContext } from '../context/socket';
import MediaStreamManager from '../utils/media-stream-manager';
import styles from './room.module.css';

import { Socket } from 'socket.io-client';
import VideoSection from '../components/page-room/video-section';
import WebRTCManager from '../utils/web-rtc-manager';

function RoomPage() {
  const roomId = useParams().roomId || '';
  const socket: Socket = useContext(SocketContext);
  const [streamManager, setStreamManager] = useState<MediaStreamManager>();
  const [rtcManager, setRtcManager] = useState<WebRTCManager>();
  const [connection, setConnection] = useState<boolean>(false);

  useEffect(() => {
    MediaStreamManager.getMedia() //
      .then((initialStream) => {
        setStreamManager(new MediaStreamManager(initialStream));
        setRtcManager(new WebRTCManager(socket, initialStream, roomId, setConnection));
      })
      .then(() => {
        socket.emit('join_room', roomId, (result: boolean) => {
          if (!result) {
            console.log('Fail, Room Full');
          }
        });
      });
  }, []);

  return (
    <>
      <div className={styles.page__container}>
        <div className={styles.section__container}>
          <VideoSection streamManager={streamManager} rtcManager={rtcManager} isConnected={connection} />
          {/* <ChatSection /> */}
        </div>
      </div>
    </>
  );
}

export default RoomPage;
