export abstract class Pokemon {
    constructor(
        public name: string,
        public attack: string,
        public hp: number,
        public type: string) { }

    showInfoAbout() {
        
        console.log(this.name, this.attack, this.hp, this.type);
    }

    getLinkToImage():string{
        return `./img/${this.constructor.name}.png`
    }

}

