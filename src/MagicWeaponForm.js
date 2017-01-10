import React,{Component} from 'react';
export default class MagicWeaponForm extends Component{
    constructor(props){
        super(props);
        this.update = this.update.bind(this);
        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
        this.changeBonus = this.changeBonus.bind(this);
        this.nameChange= this.nameChange.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
        this.changeAtt = this.changeAtt.bind(this);
        this.setRarity = this.setRarity.bind(this);
    }

    update(){}
    handleIncrease(){
       this.props.handleBonusIncrease();
    }
    handleDecrease(){
        this.props.handleBonusDecrease();
    }
    changeBonus(){
        this.props.changeBonus(this.refs.bonusTo.value)
    }
    nameChange(){
        this.props.nameChange(this.refs.name.value)
    }
    setRarity(){
        this.props.setRarity(this.refs.rarity.value)
    }
    updateDescription(){
        this.props.updateDescription(this.refs.description.value)
    }
    changeAtt(){
        this.props.changeAtt()
    }
    render(){
        const item = this.props.item;
        return (
            <div>
                <div className="ui segment">
                    <div className="ui card centered">
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
                                </div>
                                <div className="ui segment">
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
                                        <button className="ui button" onClick={this.changeAtt}>Att</button>

                                    </div>
                                </div>


                            </div>
                            <div>
                                <textarea className="ui" ref="description" onChange={this.updateDescription}></textarea>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="ui card centered">
                    <div className="content">
                        <div className="rarity">Rarity: {item.rarity.toUpperCase()} &nbsp; {item.att ? "Attunement".toUpperCase() : ""}</div>
                        <div className="name">Name: {item.name}</div>
                        <div className="bonus">Bonus: +{item.bonus}</div>
                        <div className="bonusTo">Bonus to: {item.bonusTo}</div>
                        <div className="cost">Cost: {item.cost}</div>
                        <div className="cost">Days to Build: {item.days}</div>
                        <div className="description">
                            <p>Description: {item.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}