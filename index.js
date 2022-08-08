const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors(), //
  express.json(),
  express.urlencoded({ extended: false }),
  morgan('dev')
);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
