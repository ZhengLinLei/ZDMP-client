const model = require('../models')


const controller = {};


controller.getMainPage = (req, res) => {
    res.render('index');
}

controller.getPage = (req, res) => {
    if(model.isPage(req.params.page)){
        res.render(req.params.page);
    }else{
        res.status(404).send('What are you doing with your life? 404');
    }
}
module.exports = controller;