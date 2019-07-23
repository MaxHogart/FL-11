class Fighter{

    constructor(options){
        const name = options.name,
            damage = options.damage,
            hp = options.hp,
            agility = options.agility;

        let currentHp = options.hp,
            win = 0,
            loss = 0;
            
        this.getName = function () {
            return name;
        }
        this.getDamage = function () {
            return damage;
        }
        this.getAgility = function () {
            return agility;
        }
        this.getHealth = function () {
            return currentHp;
        }
        this.dealDamage = function (damage) {
            currentHp -= damage;
            currentHp = currentHp < 0 ? 0 : currentHp;            
        }
        this.attack = function (fighter) {
            const percent = 100;
            let random = Math.floor(Math.random() * (percent + 1));
            if (random <= fighter.getAgility()) {               
                console.log(`${this.getName()} attack missed`);
            } else {
                fighter.dealDamage(this.getDamage()); 
                console.log(`${this.getName()} make ${this.getDamage()} damage to ${fighter.getName()}`);
            }
        }
        this.logCombatHistory = function () {
            console.log(`Name: ${this.getName()}, Wins: ${win}, Losses: ${loss}`);
        }
        this.heal = function (healHp) {
            currentHp += healHp;
            currentHp = currentHp > hp ? hp : currentHp;            
        }
        this.addWin = function () {
            win++;
        }
        this.addLoss = function () {
            loss++;
        }        
    }
}

function battle (fighter1, fighter2) {
    if (fighter1.getHealth() === 0 || fighter2.getHealth() === 0) {
        if (fighter1.getHealth() === 0 && fighter2.getHealth() === 0) {
            console.log(`${fighter1.getName()} and ${fighter2.getName} is dead and can't fight.`); 
        } else if (fighter1.getHealth() === 0) {
            console.log(`${fighter1.getName()} is dead and can't fight.`);
        } else {
            console.log(`${fighter2.getName()} is dead and can't fight.`);
        }        
    } else {
        while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
            fighter1.attack(fighter2);
            if (fighter2.getHealth() < 0) {
                break
            }
            fighter2.attack(fighter1);
        }
        if (fighter1.getHealth>fighter2.getHealth) {
            fighter1.addWin();
            fighter2.addLoss();
        } else {
            fighter2.addWin();
            fighter1.addLoss();
        }
    }

}

const myFighter = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
const myFighter2 = new Fighter({name: 'jack', damage: 30, hp: 100, agility: 10});

myFighter.logCombatHistory();

