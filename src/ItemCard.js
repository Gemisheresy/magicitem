import React, {Component} from 'react';

export default class ItemCard extends Component {
    constructor(props) {
        super(props)
        this.deleteItem = this.deleteItem.bind(this)
        this.updateItem  = this.updateItem.bind(this)

    }
    deleteItem(id){
        this.props.deleteItem(id)
    }
    updateItem(id){
        this.props.updateItem(id)
    }
    render() {
        const item = this.props.item;
        const spells = item.spells.map((spell,index) => (
            <div key={index}>{spell.spellLvl}  {spell.spellName}</div>
        ))
        return (
            <div className="ui card centered">
                <div className="content">
                    <div className="rarity">
                        Rarity: {item.rarity.toUpperCase()} &nbsp; {item.att ? "Attunement".toUpperCase() : ""}</div>
                    <div className="name">Name: {item.name}</div>
                    <div className="bonus">Bonus: +{item.bonus}</div>
                    <div className="bonusTo">Bonus to: {item.bonusTo}</div>
                    <div className="cost">Cost: {item.cost}</div>
                    <div className="cost">Days to Build: {item.days}</div>
                    <div className="description">
                        <p>Description: {item.description}</p>
                    </div>
                    <div className="spell">Spells: {spells}</div>
                </div>
                <div className="ui segement">
                    <div className="ui buttons">
                        <button className="ui button" onClick={()=> this.deleteItem(item.id)}>Delete</button>
                        <button className="ui button" onClick={()=> this.updateItem(item.id)}>Update</button>
                    </div>
                </div>
            </div>
        )
    }
}