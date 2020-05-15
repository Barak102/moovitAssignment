var express = require('express');
var moment = require('moment');
var fs = require('fs');
var directive = './server/db/';
const serviceRouter = express.Router();

serviceRouter.post('/submit', (req,res) => {
    const currentDate = moment();
    const fileName = `registered_${currentDate.format('DDMMYYYY_HHmmss')}.txt`;
    console.log(req.body);

    if(!fs.existsSync(directive)) {
        fs.mkdirSync(directive); 
    }

    fs.writeFile(`${directive}${fileName}`,JSON.stringify(req.body), (err) => {
        if(err) {
            console.log(err);
        }
    });
    res.status(200).send({message: 'ok'});
});

module.exports = serviceRouter;