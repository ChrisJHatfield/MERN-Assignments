class Ninja {
    constructor(name, health, speed=3, strength=3) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
    }
    sayName() {
        const name = this.name;
        console.log(name);
    }
    showStats() {
        console.log(`Ninja stats: name: ${ this.name }, strength(${ this.strength }), speed(${ this.speed }), health(${ this.health })`);
    }
    drinkSake() {
        this.health += 10;
    }
}
const Chris = new Ninja ('Chris', 5);
Chris.sayName();
Chris.drinkSake();
Chris.showStats();