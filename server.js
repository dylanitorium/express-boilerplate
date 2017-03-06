// Allows us to use babel on the server
import 'babel-polyfill';
import express from 'express';

import config from './config/environment';
import routeConfig from './routes';

const {
  EXPRESS: {
    PORT,
  },
} = config;

// Server Config
// =============
const app = express();
const port = PORT;

routeConfig(app);

// Start Server
// ============
app.listen(port, (error) => {
  if (error) {
    console.error(error); // eslint-disable-line no-console
  } else {
    console.info('----------'); // eslint-disable-line no-console
    console.info(`Server listening on port ${port}.`); // eslint-disable-line no-console
    console.info('==========');// eslint-disable-line no-console
  }
});
