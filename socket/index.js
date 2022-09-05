module.exports = function (io) {
  io.on('connection', (socket) => {
    //
    // When user enters a room
    socket.on('join_room', (roomId, cb) => {
      console.log('join room => ', roomId);

      const room = socket.adapter.rooms.get(roomId);
      if (room && room.size >= 2) {
        // TODO: if room is full, send fail message
        console.log(`ROOM FULL (${roomId})`);
        cb(false);
        return;
      }

      socket.roomId = roomId; // store roomId in socket object
      socket.join(roomId); // Join in the room
      cb(true);

      // send a handshake to the other client in this room
      socket.to(roomId).emit('room_handshake');
    });

    socket.on('send_rtc_offer', (rtcOffer, roomId) => {
      // send a rtc-offer to the other client in this room
      socket.to(roomId).emit('receive_rtc_offer', rtcOffer);
    });

    socket.on('send_rtc_answer', (rtcAnswer, roomId) => {
      // send a rtc-answer to the other client in this room
      socket.to(roomId).emit('receive_rtc_answer', rtcAnswer);
    });

    socket.on('send_rtc_icecandidate', (ice, roomId) => {
      socket.to(roomId).emit('receive_rtc_icecandidate', ice);
    });

    socket.on('disconnect', () => {
      const roomId = socket.roomId;
      socket.leave(roomId);
      socket.to(roomId).emit('init_rtc');
    });
  });
};
