export class Pokemon {
    constructor(name, attack, hp, type) {
        this.name = name;
        this.attack = attack;
        this.hp = hp;
        this.type = type;
    }
    showInfoAbout() {
        console.log(this.name, this.attack, this.hp, this.type);
    }
    getLinkToImage() {
        return `./img/${this.constructor.name}.png`;
    }
}
