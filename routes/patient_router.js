var express = require('express');
var router = express.Router();
var fs = require('fs');
var mysql = require('./mysql/conn');
var bodyparser = require('body-parser');
var urlencodedParser = bodyparser.urlencoded({ extended: false });
//sign in
router.get('/sign_page2',function(req,res){
  res.render('sign_page2');
});
router.post('/signin',urlencodedParser,function(req,res){
  var items = req.body;
  var sql = `INSERT INTO patient (fname,lname,door_no,street,area,district,city,country,pincode,dob,sex,blood_group) VALUES ('${items.firstname}','${items.lastname}','${items.Doorno}','${items.street}','${items.area}','${items.district}','${items.city}','${items.country}',${parseInt(items.pincode)},'${items.dob}','${items.gender}','${items.blood_group}')`;
 mysql.query(sql, function (err, result) {
   if (err) throw err;
   console.log("1 record inserted");
 });
});
router.get('/sign_page1',function(req,res){
  res.render('sign_page1');
});
module.exports = router;
