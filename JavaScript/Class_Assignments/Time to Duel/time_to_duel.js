class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target, attacking_card) {
        if (target instanceof Unit) {
            // reduce "target" Unit res by attacking Unit power
            target.res -= attacking_card.power;
            console.log(`Card: ${target.name} has been attacked and its resilience is now: ${target.res}`);
            if (target.res <= 0){
                console.log(`Card: ${ target.name } has been defeated!`)
            }
        }
        else {
            throw new Error( "Target must be a unit!" ) ;
        }
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target) {
        if (target instanceof Unit) {
        // must be played with a Unit to "target"
        // targets "stat(power/res)" by increasing or reducing it by "magnitude(+/-)"
            if (this.stat == "power"){
                target.power += this.magnitude;
                console.log(`Card: ${target.name} power is now ${target.power}`);
            }
            else if (this.stat == "resilience"){
                target.res += this.magnitude;
                console.log(`Card: ${target.name} resilience is now ${target.res}`);
            }
        }
        else {
            throw new Error( "Target must be a unit!" );
        }
    }
}
const redBeltNinja = new Unit ("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit ("Black Belt Ninja", 4, 5, 4);
const hardAlgorithm = new Effect ("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
const unhandledPromiseRejection = new Effect (" Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
const pairProgramming = new Effect ("Pair Programming", 3, "increase target's power by 2", "power", 2);

// Play out the following scenario: 
// turn	action
// 1	Player 1 summons "Red Belt Ninja"
console.log(redBeltNinja);
// 1	Player 1 plays "Hard Algorithm" on "Red Belt Ninja"
hardAlgorithm.play(redBeltNinja);
// 2	Player 2 summons "Black Belt Ninja"
console.log(blackBeltNinja);
// 2	Player 2 plays "Unhandled Promise Rejection" on "Red Belt Ninja"
unhandledPromiseRejection.play(blackBeltNinja);
// 3	Player 1 plays "Pair Programming" on "Red Belt Ninja"
pairProgramming.play(redBeltNinja);
// 3	Player 1 has "Red Belt Ninja" attack "Black Belt Ninja"
redBeltNinja.attack(blackBeltNinja, redBeltNinja);