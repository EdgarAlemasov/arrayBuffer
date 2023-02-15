import Damage from "./damage";


export default class Daemon extends Damage {
    constructor (name) {
        super(name);
        this.attack = 100;
        this.defence = 50;
    }
}
