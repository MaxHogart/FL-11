
function Charmander(){
    this.typePokemon = 'Charmander';
    this.nextLevel   = 'Charmeleon';

    this.constructorr = function(){
        this.type = 'Fire';
        this.fly  = false;
        this.spice = 'Lizard Pokemon';

        
        Charmander.prototype.getType = function(){
            return this.type;
        }
        Charmander.prototype.getPokemonType = function(){
            return this.typePokemon;
        }
        Charmander.prototype.getSpecie = function(){
            return this.spice;
        }
        Charmander.prototype.canFly = function (){
            return this.fly;
        }
        Charmander.prototype.evolve = function (){
            return this.nextLevel;
        }
    }
    this.constructorr();
}

function Charmeleon(){
    this.constructorr();
    this.nextLevel   = 'Charizard';
    this.typePokemon = 'Charmeleon';
    this.spice = 'Flame Pokemon';

}
Charmeleon.prototype = new Charmander();

function Charizard(){
    this.constructorr();
    this.nextLevel   = 'Charizard';
    this.typePokemon = 'Charizard';
    this.fly = true;
    this.spice = 'Flame Pokemon';
}
Charizard.prototype = new Charmander();


const charmander = new Charmander();
const charmeleon = new Charmeleon();
const charizard  = new Charizard();
console.log(charmander);
console.log(charmander.getType());
console.log(charmander.getPokemonType());
console.log(charmander.getSpecie());
console.log(charmander.evolve());
console.log(charmander.canFly());

console.log('------------------');

console.log(charmeleon);
console.log(charmeleon.getType());
console.log(charmeleon.getPokemonType());
console.log(charmeleon.getSpecie());
console.log(charmeleon.evolve());
console.log(charmeleon.canFly());


console.log('------------------');

console.log(charizard);
console.log(charizard.getType());
console.log(charizard.getPokemonType());
console.log(charizard.getSpecie());
console.log(charizard.evolve());
console.log(charizard.canFly());



