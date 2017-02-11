import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import reducer from './Reducer';
import MagicWeaponForm from './MagicWeaponForm';
import ItemCardList from './ItemCardList'
const initialState = {
    magicItem:  {
            rarity: 'common',
            maxSpell: 1,
            spellLvl: 0,
            spells: [],
            maxBonus: 0,
            bonus: 0,
            bonusTo: '',
            cost: 100,
            days: 4,
            levelReq: 3,
            att: false
        },
    savedItems: [],
    appState: {}
};
const store = createStore(reducer,initialState)

 class App extends Component{
    constructor(props){
        super(props);
        this.increaseBonus = this.increaseBonus.bind(this);
        this.decreaseBonus = this.decreaseBonus.bind(this);
        this.bonusChange = this.bonusChange.bind(this);
        this.updateName = this.updateName.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
        this.changeAtt = this.changeAtt.bind(this);
        this.setRarity = this.setRarity.bind(this);
        this.addSpell = this.addSpell.bind(this);
        this.removeSpell = this.removeSpell.bind(this);
        this.saveItem = this.saveItem.bind(this);
        this.deleteItem= this.deleteItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.sendSave = this.sendSave.bind(this);


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
    updateDescription(text){
        store.dispatch({
            type:"UPDATE_DESCRIPTION",
            description: text
        })
    }
    changeAtt(){
        store.dispatch({
            type: "SET_ATTUNEMENT"
        })
    }
    setRarity(level){
        store.dispatch({
            type: "SET_RARITY",
            level :level
        })
    }
    addSpell(level,name){
        store.dispatch({
            type: 'ADD_SPELL',
            level: level,
            name: name

        })
    }
    removeSpell(index){
        store.dispatch({
            type: "REMOVE_SPELL",
            index: index
        })
    }
    saveItem(item){
        store.dispatch({
            type: "SAVE_ITEM",
            item: item
        })
    }
    deleteItem(index){
        store.dispatch({
            type:"DELETE_ITEM",
            index: index
        })
    }
    updateItem(index){
        store.dispatch({
            type: "UPDATE_ITEM",
            index: index
        })
    }
    sendSave(){
        store.dispatch({
            type: "SENDING"
        })
    }
    render() {
        const state = store.getState();
        const magicItem = state.magicItem;
        const savedItems= state.savedItems;
        return (
           <div>
               <MagicWeaponForm
                   item={magicItem}
                   handleBonusIncrease={this.increaseBonus}
                   handleBonusDecrease={this.decreaseBonus}
                   changeBonus={this.bonusChange}
                   nameChange={this.updateName}
                   updateDescription={this.updateDescription}
                   changeAtt={this.changeAtt}
                   setRarity={this.setRarity}
                   addSpell={this.addSpell}
                   saveItem={this.saveItem}
                   sendSave={this.sendSave}
                   removeSpell={this.removeSpell}
               />
               <ItemCardList
                   items={savedItems}
                   deleteItem={this.deleteItem}
                   updateItem={this.updateItem}
               />
           </div>

        )
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
