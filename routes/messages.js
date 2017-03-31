var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messgeSchema = new Schema({
	message: String
})

var Message = mongoose.model('Message', messageSchema );
var router = express.Router();


router.get('/get', function (req, res) {
	res.send('Getting messages')

})

router.get('/get/:id', function(req, res){
	res.send('Getting message' + req.params.id );
})

router.post('/create', function(req,res){

	var m = Message();
	m.message = "hi mongodb",

	m.Save(function( err,doc){
		res.send(doc);

	})
	res.send('Posting new message')

})

module.exports = router;