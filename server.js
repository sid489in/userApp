var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var YouTube = require('youtube-node');
var YOUTUBE_API_KEY = "AIzaSyAt7emGpoER9-z_iaA_IxyYpp1b3sAqfL8";
var youTube = new YouTube(); 
youTube.setKey(YOUTUBE_API_KEY);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'public')));

var User = mongoose.model('User',{
	'userName' :String,
	'password' :String,
	'firstName' : String,
	'lastName' : String,
});

/*mongoose.connect('mongodb://localhost:27017/userdb');*/

app.get('/api/videos', function(req,res,next){
	var searchStr = req.query.searchStr;
	console.log('SSSSSSSSSSSS'+searchStr);
	youTube.search('Sunny Leone',2,function(err,doc){
		if (err) {
			console.log(err);
		}
		else {
			console.log(JSON.stringify(doc, null, 2));
			return res.json();
		}
	})
});

app.get('/',function(req,res,next){
	res.sendFile('/#'+ req.originalUrl);
});

app.listen(3000,function(){
	console.log('server running at port : 3000');
});