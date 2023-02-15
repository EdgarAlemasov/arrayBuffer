import Character from "./characters";


export default class Damage extends Character {
    constructor (name, type, distance) {
        super (name, type);
        this.distance = distance;
    }


    get stoned () {
        return Boolean(this.stoned);
    }

    set stoned (value) {
        this.stoned = value;
    }

    get attack () {
        if ( 0 < this.distance < 8 ) {
            let attack = this.attack - (this.attack / 10) * (this.distance - 1);
            if (this.stoned) {
                attack -= Math.log2(this.distance) * 5;
            }
            return Math.floor(attack)
        } else {
            return 0
        }
    }
}