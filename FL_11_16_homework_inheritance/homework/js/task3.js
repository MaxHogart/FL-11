
function Charmander(){
    this.typePokemon = Charmander.name;
    this.specie = 'Lizard Pokemon';
    this.type = 'Fire';
    this.fly = false;
}

Charmander.prototype.getType = function(){
    return this.type;
}
Charmander.prototype.getPokemonType = function(){
    return this.typePokemon;
}
Charmander.prototype.getSpecie = function(){
    return this.specie;
}
Charmander.prototype.canFly = function (){
    return this.fly;
}
Charmander.prototype.evolve = function (){
    return new Charmeleon();
}

function Charmeleon(){
    this.typePokemon = Charmeleon.name;
    this.specie = 'Flame Pokemon';
    Charmeleon.prototype.evolve = function (){
        return new Charizard();
    }
}
Charmeleon.prototype = new Charmander();
Charmeleon.prototype.constructor = Charmeleon;

function Charizard(){
    this.typePokemon = Charizard.name;
    this.fly = true;
}
Charizard.prototype = new Charmeleon();
Charizard.prototype.constructor = Charizard;


const charmander = new Charmander();
const charmeleon = new Charmeleon();
const charizard = new Charizard();


function Pichu(){
    this.typePokemon = Pichu.name;
    this.type = 'Electric';
    this.fly = false;
}
Pichu.prototype.getType = function(){
    return this.type;
}
Pichu.prototype.getPokemonType = function(){
    return this.typePokemon;
}
Pichu.prototype.canFly = function (){
    return this.fly;
}
Pichu.prototype.evolve = function (){
    return new Pikachu();
}
function Pikachu(){
    this.typePokemon = Pikachu.name;
    this.type = 'Electric';
    Pichu.prototype.evolve = function (){
        return new Raichu();
    }
}
Pikachu.prototype = new Pichu();
Pikachu.prototype.constructor = Pikachu;
function Raichu(){
    this.typePokemon = Raichu.name;
    this.type = 'Electric';
}
Raichu.prototype = new Pikachu();
Raichu.prototype.constructor = Raichu;

const pichu = new Pichu();
const pikachu = new Pikachu();
const raichu = new Raichu();

