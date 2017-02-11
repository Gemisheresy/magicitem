import React,{ Component } from 'react';
import ItemCard from './ItemCard';

export default class ItemCardList extends Component{
    constructor(props){
        super(props);


    }

    render(){
        const itemsCards = this.props.items.map((item,index)=> (
            <ItemCard
                key={index}
                item={item}
                deleteItem={this.props.deleteItem}
                updateItem={this.props.updateItem}
            />
        ));
        return (
            <div className="ui cards">
                {itemsCards}
            </div>
        )
    }

}