function reducer(state,action){
    if(action.type === 'INCREASE_BONUS'){
        const oldItem = state.magicItem;
        const oldBonus = oldItem.bonus;
        let newBonus=0;
        if (oldBonus === 4){
            newBonus = 4;
        }else {
            newBonus = oldBonus + 1;
        }
        const newItem = {
            ...oldItem,
            bonus : newBonus
        };
        return {
            ...state,
            magicItem: newItem

        }
    }else if(action.type === "DECREASE_BONUS"){
        const oldItem = state.magicItem;
        const oldBonus = oldItem.bonus;
        let newBonus=0;
        if (oldBonus === 0){
            newBonus = 0;
        }else {
            newBonus = oldBonus - 1;
        }

        const newItem = {
            ...oldItem,
            bonus : newBonus
        };
        return {
            ...state,
            magicItem: newItem

        }
    }else if(action.type === "ADD_SPELL"){
        const newSpell = {
            name: action.name,
            level: action.level
        };
        const oldItem = state.magicItem;
        const newItem = {
            ...oldItem,
            spells: oldItem.spells.concat(newSpell)
        };
        return {
            ...state,
            magicItem: newItem

        }
    }else if(action.type === "CHANGE_BONUS"){

        const newItem = {
            ...state.magicItem,
            bonusTo: action.stat
        };
        return {
            ...state,
            magicItem: newItem
        }
    }
    else if(action.type === "REMOVE_SPELL"){
        return state
    }else if(action.type === "UPDATE_NAME"){
        const oldItem = state.magicItem;
        const newItem = {
            ...oldItem,
            name: action.name
        }
        return {
            ...state,
            magicItem : newItem
        }
    }else if(action.type ==="CHANGE_RARITY"){
        return state
    }else{
        return state
    }
}
export default reducer