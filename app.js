const express = require('express');
const dotEnv = require('dotenv');
const session = require('express-session');
const useragent = require('express-useragent');
const index = require("./routers/indexrouter");
const db = require('./services/database/db');
const app = express();



dotEnv.config({path:"./env/.env"});

app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized:true
}));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(useragent.express());

db.conecctionMongoDB();

app.use('/', index);


app.listen(3000, (req, res)=>{
    console.log('SERVER RUNNING IN http://localhost:3000');
})