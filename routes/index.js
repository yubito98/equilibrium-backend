const express = require('express')
const usersRouter = require('./users.router.js');
const categoriesRouter = require('./categories.router');
const goalsRouter = require('./goals.router')

function routerApi (app){
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
  router.use('/goals', goalsRouter);
}

module.exports = routerApi;