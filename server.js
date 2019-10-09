var express = require('express');
var mysql = require('mysql');
var app = express();
var connection =mysql.createConnection({
	
	host: 'us-cdbr-iron-east-05.cleardb.net',
	user: 'b23a34da9fe379',
	password: '68882ca0',
	database: 'heroku_c595c5d7e6b1b97'
});

connection.connect(function(error){
	if(!!error){
		console.log('Error');
	}else{
		console.log('Connected');
	}
	
});



app.get('/', function(req,resp){
	 connection.query("select * from jing",function(error,rows,fields){
	    if(!!error){
		console.log('Error in the query');
	}else{
		console.log('Succeseryl query\n');
		console.log(rows);
		resp.send('Hello, ' + JSON.stringify(rows));
		
	}
});
})
app.listen(8080);