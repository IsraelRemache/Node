var express = require('express')
var app = express()



app.get('/messages/get', function (req, res) {
	res.send('Getting messages')

})

app.get('/messages/get/:id', function(req, res){
	res.send('Getting message' + req.params.id )
})

app.post('messages/create', function(req,res){
	res.send('Posting new message')

})

app.listen(3000, function (){
	console.log('Example app blablabla ')
})