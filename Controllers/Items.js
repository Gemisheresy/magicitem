const itemServices = require('../Services/Items');

module.exports.saveItem = function(req,res,next){
    return itemServices.saveItem(req)
}