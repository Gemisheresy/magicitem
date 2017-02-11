const itemServices = require('../Services/Items');

module.exports.saveItem = function(req,res,next){
    console.log(req.body)
    itemServices.saveItem(req.body).then(()=>{res.send("Ok")})
}