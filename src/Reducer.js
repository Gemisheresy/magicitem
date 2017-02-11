import apiClient from './tools/api'
const apiLink = new apiClient();

function reducer(state,action){
    return {
        magicItem: magicItemReducer(state.magicItem,action),
        savedItems: savedItemsReducer(state.savedItems,action),
        appState: appStateReducer(state,action)
    }
}



function magicItemReducer(state,action){
    if(action.type === 'INCREASE_BONUS'){
        const oldItem = state;
        const oldBonus = oldItem.bonus;
        let newBonus=0;
        if (oldBonus === oldItem.maxBonus){
            newBonus = oldItem.maxBonus;
        }else {
            newBonus = oldBonus + 1;
        }
        return {
            ...oldItem,
            bonus: newBonus

        }
    }else if(action.type === "DECREASE_BONUS"){
        const oldItem = state;
        const oldBonus = oldItem.bonus;
        let newBonus=0;
        if (oldBonus === 0){
            newBonus = 0;
        }else {
            newBonus = oldBonus - 1;
        }
        return {
            ...oldItem,
            bonus: newBonus

        }
    }else if(action.type === "ADD_SPELL"){
        const newSpell = {
            spellName: action.name,
            spellLvl: action.level
        };
        const oldItem = state;
        return {
            ...oldItem,
            spells: oldItem.spells.concat(newSpell)

        }
    }
    else if(action.type === "REMOVE_SPELL"){
        const oldItem = state;
        return {
            ...oldItem,
            spells: [...oldItem.spells.splice(0,action.index),
                ...oldItem.spells.splice(action.index + 1, oldItem.spells.length)]
        }
    }
    else if(action.type === "CHANGE_BONUS"){
        return {
            ...state,
            bonusTo: action.stat
        }
    }else if(action.type === "UPDATE_NAME"){
        const oldItem = state;
        return {
            ...oldItem,
            name: action.name
        }
    }else if(action.type ==="SET_RARITY"){
        const oldItem= state;
        if (action.level === 'common'){
            return {
                ...oldItem,
                rarity: action.level,
                cost : 100,
                maxSpell: 1,
                maxBonus: 0,
                levelReq: 3,
                days: 4
            }
        } else if (action.level === 'uncommon'){
            return {
                ...oldItem,
                rarity: action.level,
                cost : 500,
                maxSpell: 3,
                maxBonus: 1,
                levelReq: 3,
                days: 20
            }
        } else if (action.level === 'rare'){
            return {
                ...oldItem,
                rarity: action.level,
                cost : 5000,
                maxSpell: 6,
                maxBonus: 2,
                levelReq: 6,
                days: 200
            }
        }
        else if (action.level === 'veryrare'){
            return {
                ...oldItem,
                rarity: action.level,
                cost : 50000,
                maxSpell: 8,
                maxBonus: 3,
                levelReq: 11,
                days: 2000
            }
        } else if (action.level === 'legendary'){
            return {
                ...oldItem,
                rarity: action.level,
                cost : 500000,
                maxSpell: 9,
                maxBonus: 4,
                levelReq: 17,
                days: 20000
            }
        }
    }else if(action.type ==="UPDATE_DESCRIPTION"){
        const oldItem = state;
        return {
            ...oldItem,
            description: action.description
        }
    }else if (action.type === "SET_ATTUNEMENT") {
        const oldItem = state;
        const oldAtt = oldItem.att;
        return {
            ...oldItem,
            att: !oldAtt
        }
    }
    else if (action.type === "SENDING"){
        const item = state
        apiLink.post('/saveItem',item).then(function(response){
            console.log(response)
        },function(error){
            console.log(error);
        });
        return state
    }
    else {
        return state
    }
}

function savedItemsReducer(state,action){
    if(action.type === "SAVE_ITEM") {
        let oldItems = state;
        let item = {
            ...action.item,
        };
        let newItems = oldItems.concat(item)
        return newItems;
    }
    else if(action.type === "DELETE_ITEM"){
        let oldItems = state;
        let oldItemIndex = oldItems.findIndex((i)=>(i.id === action.id))
        console.log(oldItemIndex)
        let newItems = [
            ...oldItems.slice(0,oldItemIndex),
            ...oldItems.slice(oldItemIndex + 1 , oldItems.length )
        ]
        return newItems
    }
    else if(action.type === "UPDATE_ITEM"){

    }
    else {
        return state
    }
}
function appStateReducer(state,action){

}
export default reducer