import express, { Router } from 'express';

export default (app) => {
  const router = new Router();

  app.use(router);
};
