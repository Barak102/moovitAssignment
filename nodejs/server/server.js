var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var applicationRoutes = require('./routes/router');
const port = 3000;
const app = express();


app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
applicationRoutes.load(app);
app.listen(port, () => console.log('server is active'));