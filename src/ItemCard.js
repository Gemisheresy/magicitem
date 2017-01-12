import React, {Component} from 'react';

export default class ItemCard extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        const item = this.props.item;
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
                </div>
            </div>
        )
    }
}