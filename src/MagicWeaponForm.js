import React, {Component} from 'react';
import ItemCard from './ItemCard';
import ItemCardList from './ItemCardList';
export default class MagicWeaponForm extends Component {
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
        this.changeBonus = this.changeBonus.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
        this.changeAtt = this.changeAtt.bind(this);
        this.setRarity = this.setRarity.bind(this);
        this.addSpell = this.addSpell.bind(this)
        this.saveItem = this.saveItem.bind(this);
        this.sendSave= this.sendSave.bind(this);
    }

    update() {
    }

    handleIncrease() {
        this.props.handleBonusIncrease();
    }

    handleDecrease() {
        this.props.handleBonusDecrease();
    }

    changeBonus() {
        this.props.changeBonus(this.refs.bonusTo.value)
    }

    nameChange() {
        this.props.nameChange(this.refs.name.value)
    }

    setRarity() {
        this.props.setRarity(this.refs.rarity.value)
    }

    updateDescription() {
        this.props.updateDescription(this.refs.description.value)
    }

    changeAtt() {
        this.props.changeAtt()
    }
    addSpell(){
        this.props.addSpell(this.refs.spellLvl.value, this.refs.spell.value)
        this.refs.spellLvl.value = 0;
        this.refs.spell.value = '';
    }
    saveItem(){
        this.props.saveItem()
    }
    sendSave(){
        this.props.sendSave()
    }
    render() {
        const item = this.props.item;
        const items = this.props.items
        return (
            <div>
                <div className="ui segment">
                    <div className="ui card centered">
                        <div className="header">Magic Item Builder</div>
                        <div className="ui form">
                            <div className="ui">Name:</div>
                            <input type="text" ref="name" onChange={this.nameChange}/>
                            <div>
                                <div className="ui segment">
                                    <div className="ui">Rarity
                                        <select ref="rarity" onChange={this.setRarity}>
                                            <option value="common">Common</option>
                                            <option value="uncommon">Uncommon</option>
                                            <option value="rare">Rare</option>
                                            <option value="veryrare">Very Rare</option>
                                            <option value="legendary">Legendary</option>
                                        </select>
                                    </div>
                                    <div className="ui left aligned">Bonus: +{item.bonus}</div>
                                    <select className="ui centered aligned" ref="bonusTo" onChange={this.changeBonus}>
                                        <option value="">-----</option>
                                        <option value="str">Strength</option>
                                        <option value="dex">Dexterity</option>
                                        <option value="con">Constitution</option>
                                        <option value="int">Intelligence</option>
                                        <option value="wis">Wisdom</option>
                                        <option value="cha">Charisma</option>
                                        <option value="attack">Attack/Damage</option>
                                        <option value="armor">Armor Class</option>
                                    </select>
                                    <div className="ui right aligned buttons">
                                        <button className="ui button" onClick={this.handleDecrease}>
                                            <i className="minus icon"></i>
                                        </button>
                                        <button className="ui button" onClick={this.handleIncrease}>
                                            <i className="add icon"></i>
                                        </button>
                                        <button className="ui button" onClick={this.changeAtt}>Attunement</button>
                                    </div>
                                </div>
                            </div>
                            <div className="ui segment">
                                Spells
                                <select ref="spellLvl">
                                    <option value={0}>--</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                </select>
                                <input type="text" ref="spell" />
                                <button className="ui button" onClick={this.addSpell}>Add Spell</button>
                            </div>
                            <div>
                                Description
                                <textarea className="ui" ref="description" onChange={this.updateDescription}></textarea>
                            </div>
                        </div>
                        <div className="ui segment">
                            <div className="ui centered buttons">
                                <button className="ui centered aligned button blue" onClick={this.saveItem}>Save</button>
                                <button className="ui centered aligned button blue" onClick={this.sendSave}>Send Save</button>
                            </div>
                        </div>
                    </div>
                </div>
                <ItemCard item={item}/>
                <div className="ui segement">
                    <ItemCardList items={items}/>
                </div>
            </div>
        )

    }
}