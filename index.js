const http = require('http');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors(), //
  express.json(),
  express.urlencoded({ extended: false }),
  morgan('dev')
);

app.use((req, res) => res.status(404).send('404 Page Not Found'));

const httpServer = http.createServer(app);
// attach WS server on top of the http server
const SocketIO = require('socket.io');
const io = SocketIO(httpServer);
require('./socket')(io);

httpServer.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
