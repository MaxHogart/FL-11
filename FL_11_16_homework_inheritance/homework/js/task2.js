
function create(prop){
    function newObj(){

    }
    newObj.prototype = prop;
    return new newObj;
}
// Task 2
const obj1 = { prop: 5 };
const obj2 = create(obj1);

console.log(Object.getPrototypeOf(obj2) === obj1) // => true
 // => 5
console.log(obj2)
