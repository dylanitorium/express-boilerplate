import bodyParser from 'body-parser';
import morgan from 'morgan';

export default (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(morgan('dev'));
};
