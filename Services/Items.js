const mongoose = require("mongoose");
const Item = require("../Models/Item").Item;
mongoose.Promise = require('bluebird')
const mongooseUrl = 'mongodb://gemis:evadata2@ds145848.mlab.com:45848/magicitem/items';
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };
mongoose.connect(mongooseUrl,options);
const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));


module.exports.saveItem = function(item) {
    let spells = item.spells.map((spell)=> {
        return {
            spellLvl: spell.spellLvl,
            spellName: spell.spellName
        }
    })
    let newItem = new Item({
        name: item.name,
        rarity: item.rarity,
        bonus: item.bonus,
        bonusTo: item.bonusTo,
        attunement: item.attunement,
        description: item.description,
        spells: spells,
    })
    return newItem.save()
}