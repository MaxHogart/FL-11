function create(prop){
    function NewObj(){ /*code*/ }
    NewObj.prototype = prop;
    return new NewObj();
}
const obj1 = { prop: 5 };
const obj2 = create(obj1);
