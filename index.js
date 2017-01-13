var express = require('express');
const app = express();
app.use('/lib', express.static(__dirname + '/lib'));
app.use('/semantic',express.static(__dirname + '/semantic'))
app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})




const server = app.listen(8080,function(){
    let host= server.address().address;
    let port = server.address().port;
    console.log('App listening at http://%s:%s',host,port);
});