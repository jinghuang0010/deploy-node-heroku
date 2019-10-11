var express = require('express');
var mysql = require('mysql');
var app = express();


var pool  = mysql.createPool({
    connectionLimit : 10,
    host: 'us-cdbr-iron-east-05.cleardb.net',
    user: 'b23a34da9fe379',
    password: '68882ca0',
    database: 'heroku_c595c5d7e6b1b97'
  });


  app.get('/', function(request,response){
  pool.query('select * from jing', function (err, rows, fields) {
    if(err){
        console.log('error',err);
        throw err;
    }
        response.send(['hello jing!!!change',rows]);
  });
});

var port =process.env.PORT || 5000;

app.listen(port,function(){
    console.log("listen on" + port);
});