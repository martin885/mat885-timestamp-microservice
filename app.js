'use strict'
const express=require('express');
const moduleTime=require('./moduleTime.js');
var port = Number(process.env.PORT||8080);

const app =express();

app.use('/',express.static(__dirname+'/public'));

app.get('/:dateValue',function(req,res,next){

var dateValue=req.params.dateValue;

res.json(moduleTime(dateValue));
});


app.listen(port,function(){
    console.log('OK');
});

