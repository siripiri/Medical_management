var mysql = require('mysql');

var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'Medical_Managemment_Syste'
});

connection .connect(function(error){
  if(!!error){
    console.log("Error Connecting in database");
  }
  else{
    console.log("Connected");
  }
});
module.exports = connection;
