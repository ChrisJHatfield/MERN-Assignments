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
        console.log("gained 10 health")
    }
}
class Sensei extends Ninja {
    constructor(name, wisdom=10) {
        super(name, 200, 10, 10)
        this.wisdom = wisdom;
    }
    speakWisdom() {
        super.drinkSake();
        console.log("1 programmer can break the code as easy as 1,000 programmers with a missing '}'.");
    }
    showStats() {
        console.log(`Super Ninja stats: name: ${ this.name }, strength(${ this.strength }), speed(${ this.speed }), wisdom(${ this.wisdom }), health(${ this.health })`);
    }
}

const senseiChris = new Sensei ('Chris');
senseiChris.speakWisdom();
senseiChris.drinkSake();
senseiChris.showStats();