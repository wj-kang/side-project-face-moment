import { Socket } from 'socket.io-client';

class WebRTCManager {
  public peerConnection: RTCPeerConnection;

  public constructor(socket: Socket, mediaStream: MediaStream, roomId: string) {
    this.peerConnection = this.createPeerConnection(socket, mediaStream, roomId);

    /* SOCKET CLIENT LISTENERS related to WebRTC*/
    socket.on('room_handshake', async () => {
      const rtcOffer = await this.peerConnection.createOffer();
      this.peerConnection.setLocalDescription(rtcOffer);
      socket.emit('rtc_offer', rtcOffer, roomId);
    });

    socket.on('rtc_offer', async (rtcOffer) => {
      this.peerConnection.setRemoteDescription(rtcOffer);
      const rtcAnswer = await this.peerConnection.createAnswer();
      this.peerConnection.setLocalDescription(rtcAnswer);
      socket.emit('rtc_answer', rtcAnswer, roomId);
    });

    socket.on('rtc_answer', async (rtcAnswer) => {
      this.peerConnection.setRemoteDescription(rtcAnswer);
    });

    socket.on('rtc_ice_candidate', (rtcIceCandidate) => {
      console.log('got ICE candidate => ', rtcIceCandidate);
      this.peerConnection.addIceCandidate(rtcIceCandidate);
    });
  }

  private createPeerConnection(socket: Socket, stream: MediaStream, roomId: string): RTCPeerConnection {
    const peerConn = new RTCPeerConnection({
      iceServers: [
        {
          urls: [
            'STUN:stun.l.google.com:19302',
            'STUN:stun1.l.google.com:19302',
            'STUN:stun2.l.google.com:19302',
            'STUN:stun3.l.google.com:19302',
            'STUN:stun4.l.google.com:19302',
          ],
        },
      ],
    });

    peerConn.addEventListener('icecandidate', (e) => {
      socket.emit('rtc_ice_candidate', e.candidate, roomId);
    });

    peerConn.addEventListener('track', (e) => {
      console.log('#$%#$%$#%', e.streams[0]);
      // const peerVideo = document.querySelector('#video__peer') as HTMLVideoElement;
      // peerVideo.srcObject = e.streams[0];
    });

    stream.getTracks().forEach((track: MediaStreamTrack) => peerConn.addTrack(track));

    return peerConn;
  }

  public addTracksOnPeerConnection(stream: MediaStream) {
    stream //
      .getTracks()
      .forEach((track: MediaStreamTrack) => this.peerConnection.addTrack(track));
  }
}

export default WebRTCManager;
