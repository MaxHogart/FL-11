function assign () {
    let obj = arguments[0];
    for (let i=1; arguments.length>i; i++) {
        for (let key in arguments[i]) {
            if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
                obj[key] = arguments[i][key];
            }
        }
    }
    return obj;
}
