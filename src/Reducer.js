function reducer(state,action){
    if(action.type === 'INCREASE_BONUS'){
        const oldItem = state.magicItem;
        const oldBonus = oldItem.bonus;
        let newBonus=0;
        if (oldBonus === oldItem.maxBonus){
            newBonus = oldItem.maxBonus;
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
    }else if(action.type ==="SET_RARITY"){
        const oldItem= state.magicItem;
      if (action.level === 'common'){
          const newItem = {
              ...oldItem,
              rarity: action.level,
              cost : 100,
              maxSpell: 1,
              maxBonus: 0,
              levelReq: 3,
              days: 4
          }
          return {
              ...state,
              magicItem: newItem
          }
      } else if (action.level === 'uncommon'){
          const newItem = {
              ...oldItem,
              rarity: action.level,
              cost : 500,
              maxSpell: 3,
              maxBonus: 1,
              levelReq: 3,
              days: 20
          };
          return {
              ...state,
              magicItem: newItem
          }
      } else if (action.level === 'rare'){
          const newItem = {
              ...oldItem,
              rarity: action.level,
              cost : 5000,
              maxSpell: 6,
              maxBonus: 2,
              levelReq: 6,
              days: 200
          };
          return {
              ...state,
              magicItem: newItem
          }
      }
      else if (action.level === 'veryrare'){
          const newItem = {
              ...oldItem,
              rarity: action.level,
              cost : 50000,
              maxSpell: 8,
              maxBonus: 3,
              levelReq: 11,
              days: 2000
          };
          return {
              ...state,
              magicItem: newItem
          }
      } else if (action.level === 'legendary'){
          const newItem = {
              ...oldItem,
              rarity: action.level,
              cost : 500000,
              maxSpell: 9,
              maxBonus: 4,
              levelReq: 17,
              days: 20000
          };
          return {
              ...state,
              magicItem: newItem
          }
      }
    }else if(action.type ==="UPDATE_DESCRIPTION"){
        const oldItem = state.magicItem;
        const newItem = {
            ...oldItem,
            description: action.description
        };
        return {
            ...state,
            magicItem: newItem
        }
    }else if (action.type === "SET_ATTUNEMENT"){
        const oldItem = state.magicItem;
        const oldAtt = oldItem.att;
        const newItem = {
            ...oldItem,
            att : !oldAtt
        };
        return {
            ...state,
            magicItem: newItem
        }
    } else {
        return state
    }
}
export default reducer