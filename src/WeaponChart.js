class MagicItem {
    constructor(ms,mb,lr,c){
       this.maxSpell = ms;
        this.maxBonus = mb;
        this.levelReq = lr;
        this.cost= c;

    }
    getItem(){
        return this;
    }
}






export default class MagicItemChart {
    constructor(){
       this.chart = {
            common : new  MagicItem(1, 0, 3, 100),
            uncommon : new MagicItem(3, 1, 3, 500),
            rare :new MagicItem(6, 2, 6, 5000),
            veryrare :new  MagicItem(8, 3, 11, 50000),
            legendary :new MagicItem(9, 4, 17, 500000)
        }
    }
    static getItem(rarity){
        this.chart[rarity].getItem();
    }
}