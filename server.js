var express = require('express');
var mysql = require('mysql');
var app = express();

//设置连接
var connection =mysql.createConnection({

	host: 'localhost',
	user: 'root',
	password: '1234',
	database: 'huangjing'
});

connection.connect(function(error){
	if(!!error){
		console.log('Error');
	}else{
		console.log('Connected');
	}

});



app.get('/', function(req,resp){
	 connection.query("select * from measurement where unit_id>(select count(*) from measurement)-5 order by unit_id asc limit 5",function(error,rows,fields){
	    if(!!error){
		console.log('Error in the query');
	}else{
		console.log('Succeseryl query\n');
		return resp.json({
			data:rows
		})

	}
});
})




app.listen(8080);
