function assign () {
    let obj = arguments[0];
    for (let i=1; arguments.length>i; i++) {
        for (let key in arguments[i]) {
            obj[key] = arguments[i][key];
        }
    }
    return obj;
}

const defaults = {a:123, b:777};
const options = {a:456, x: 44};
const configs = assign({}, defaults, options);

console.log(configs);