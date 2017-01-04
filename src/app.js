import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import reducer from './Reducer';
import MagicWeaponForm from './MagicWeaponForm';
const initialState = {
    magicItem: {
        rarity: 'common',
        maxSpell: 1,
        spellLvl: 0,
        spells:[],
        maxBonus: 0,
        bonus: 0,
        bonusTo: '',
        cost: 100,
        days: 4,

    }
}
const store = createStore(reducer,initialState)

 class App extends Component{
    constructor(props){
        super(props);
        this.increaseBonus = this.increaseBonus.bind(this);
        this.decreaseBonus = this.decreaseBonus.bind(this);
        this.bonusChange = this.bonusChange.bind(this);
        this.updateName = this.updateName.bind(this);

    }
    componentDidMount(){
        store.subscribe(()=> this.forceUpdate())
    }
    increaseBonus(){
        store.dispatch({
            type: "INCREASE_BONUS"
        })
    }
    decreaseBonus(){
        store.dispatch({
            type: "DECREASE_BONUS"
        })
    }
    bonusChange(attr){
        store.dispatch({
            type:"CHANGE_BONUS",
            stat : attr
        })
    }
    updateName(attr){
        store.dispatch({
            type:"UPDATE_NAME",
            name: attr
        })
    }
    render() {
        const state = store.getState();
        const magicItem =state.magicItem;
        return (
           <div>
               <MagicWeaponForm
                   item={magicItem}
                   handleBonusIncrease={this.increaseBonus}
                   handleBonusDecrease={this.decreaseBonus}
                   changeBonus={this.bonusChange}
                   nameChange={this.updateName}
               />

           </div>

        )
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById('app')
);