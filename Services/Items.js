const mongoose = require("mongoose");
const Item = require("../Models/Item");

module.exports.saveItem = function(item) {
    const newItem = new Item({
        name: item.name,
        rarity: item.rarity,
        bonus: item.bonus,
        bonusTo: item.bonusTo,
        attunement: item.attunement,
        description: item.description,
        spells: [{spellLvl: item.spellLvl,spellName: item.spellName }],
    })
    return newItem.save(function(err,newItem){
        if(err){ console.log(err)}
        console.log(newItem.name + 'was saved');
    });
}