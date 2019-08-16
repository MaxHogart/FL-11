class Hamburger {
    constructor (type, callories, secretIngredient) {
        this.type = type;
        let isHamburgerBitten = false,
            biteNum = 0,
            posibleIngredient = {
                tomato: {
                    name: 'tomato',
                    num: 0,
                    maxNum: 2,
                    ingredientCallories: 20
                },
                cheese: {
                    name: 'cheese',
                    num: 0,
                    maxNum: 1,
                    ingredientCallories: 120
                },
                secretIngredient: {
                    name: 'secret ingredient',
                    num: 0,
                    maxNum: 1,
                    ingredientCallories: 100
                }
            },
            that = this;
        this.getCallories = () => {
            return callories;
        }
        this.setCallories = (newCallories) => {
            callories = newCallories;
        }
        this.addCheese = () => { 
            add(posibleIngredient.cheese);         
        }
        this.addTomato = () => {
            add(posibleIngredient.tomato);          
        }
        this.addSecretIngredient = () => {
            if (!posibleIngredient.cheese.num && !posibleIngredient.tomato.num || isHamburgerBitten) {
                add(posibleIngredient.secretIngredient);
            } else {
                console.log('Sorry, you can add secret ingredient only before another ingredient.')
            }            
        }
        this.bite = () => {
            isHamburgerBitten = true;
            biteNum++;
        }
        this.info = () => {
            let infoText = `${this.type} hamburger: `;
            for (let ingredient in posibleIngredient) {
                if (posibleIngredient[ingredient].num>0) {
                    infoText+= `with ${posibleIngredient[ingredient].num} ${posibleIngredient[ingredient].name}, `
                }                
            }
            infoText+= `is bit ${biteNum} times. Total calories: ${callories}.`
            return infoText
        }

        let add = (ingredient) => {
            if (isHamburgerBitten) {
                console.log(`Sorry, you cannot add ${ingredient.name}`);
            } else {
                if (ingredient.num<ingredient.maxNum) {
                    callories+=ingredient.ingredientCallories;
                    ingredient.num++
                } else {
                    console.log(`Sorry, you can add only ${ingredient.num} ${ingredient.name}.`)
                } 
            }
        }

        if (secretIngredient) {
            this.addSecretIngredient();
        }
    }
}

const myHamburger = new Hamburger('classic', 600);


