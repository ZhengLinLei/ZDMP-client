const express = require('express');
const router = express.Router();

const controller = require('../controllers');


module.exports = app => {
    // GENERATE APP ROUTES
    router.get('/', controller.getMainPage);
    router.get('/:page', controller.getPage);
    // If route doesn't exist, return 404
    // router.all('*', (req, res) => {
    //     res.status(404).send('What are you doing with your life? 404');
    // });


    app.use(router)
}