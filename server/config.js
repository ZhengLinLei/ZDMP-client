const path = require('path');
const hbs = require('express-handlebars');

const express = require('express');
const routes = require('../routes');

module.exports = app =>{
    // SERVER CONFIG-----------

    // SET GLOBAL VARIABLES
    app.set('env', 'dev'); // dev | prod
    app.set('port', process.env.PORT || 80); // IN PRODUCTION MUST CHANGE THIS PORT TO 80
    app.set('views', path.join(__dirname, '../views')); // ABSOLUTE PATH OF THE VIEWS FOLDER
    app.set('view engine', '.hbs'); // VIEW RENDER ENGINE

    // VIEWS ENGINE
    app.engine(app.get('view engine'), hbs({
        defaultLayout: 'template',
        partialsDir: path.join(app.get('views'), 'partials'),
        layoutsDir: path.join(app.get('views'), 'layouts'),
        extname: app.get('view engine'),
        helpers: require('./helpers.hbs')
    }));


    // MIDDLEWARES
    app.use(express.urlencoded({
        extended: true
    }));
    app.use(express.json());

    // ROUTES
    routes(app);

    // STATIC FILES
    app.use('/static', express.static(path.join(__dirname, '../public')));

    // RETURN ALL CONFIG TO THE MAIN FILE
    return app;
}