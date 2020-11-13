import StickyRouter from './sticky.route';

export default (app) => {
  app.use('/', StickyRouter);
};