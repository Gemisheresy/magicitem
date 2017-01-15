const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

const ItemSchema= new Schema({
    name: String,
    rarity: String,
    bonus: Number,
    bonusTo: String,
    attunement: Boolean,
    description: String,
    spells: [{spellLvl: Number,spellName: String }],

})

const Item = mongoose.model("Item",ItemSchema );

module.exports = {
    ItemSchema: ItemSchema,
    Item : Item
}
