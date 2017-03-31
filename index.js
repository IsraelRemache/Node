var express = require('express')
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/nodedemo');
var app = express()

app.use("/", require('./routes/index'));
app.use("/messages", require('./routes/messages'))

app.listen(3000, function (){
	console.log('Example app blablabla ')
})