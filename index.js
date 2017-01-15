var express = require('express');
const app = express();
const JSONParser= require('body-parser').json();


const item = require(__dirname + '/Models/Item.js');
app.use('/lib', express.static(__dirname + '/lib'));
app.use('/semantic',express.static(__dirname + '/semantic'))
app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})
app.post('/saveItem',JSONParser,(req,res)=>{
    console.log(req.body)
})




const server = app.listen(8080,function(){
    let host= server.address().address;
    let port = server.address().port;
    console.log('App listening at http://%s:%s',host,port);
});