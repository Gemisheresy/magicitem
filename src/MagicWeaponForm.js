import React,{Component} from 'react';
export default class MagicWeaponForm extends Component{
    constructor(props){
        super(props);
        this.update = this.update.bind(this);
        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
        this.changeBonus = this.changeBonus.bind(this)
        this.nameChange= this.nameChange.bind(this)
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
    render(){
        const item = this.props.item;
        return (
            <div>
                <div className="ui card">
                    <div>
                        <input type="text" ref="name" onChange={this.nameChange}/>
                        <div>
                            <div className="ui">+{item.bonus}</div>
                            <select ref="bonusTo" onChange={this.changeBonus}>
                                <option value="none">-----</option>
                                <option value="str">Strength</option>
                                <option value="dex">Dexterity</option>
                                <option value="con">Constitution</option>
                                <option value="int">Intelligence</option>
                                <option value="wis">Wisdom</option>
                                <option value="cha">Charisma</option>
                                <option value="ac">Armor Class</option>
                            </select>
                            <div className="ui buttons">
                                <button className="ui button" onClick={this.handleIncrease}><i className="red add square icon"></i></button>
                                <button className="ui button" onClick={this.handleDecrease}><i className="red minus square icon"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui card">
                    <div className="rarity">Rarity: {item.rarity}</div>
                    <div className="name">Name: {item.name}</div>
                    <div className="bonus">Bonus: {item.bonus}</div>
                    <div className="bonusTo">Bonus to: {item.bonusTo}</div>
                </div>
            </div>
        )

    }
}