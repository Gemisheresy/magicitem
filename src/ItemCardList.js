import React,{ Component } from 'react';
import ItemCard from './ItemCard';

export default class ItemCardList extends Component{
    constructor(props){
        super(props);

    }
    render(){
        const items = this.props.items.map((item) => (
            <ItemCard item={item}/>
        ));
        return (
            <div className="ui cards">
                {items}
            </div>
        )
    }

}