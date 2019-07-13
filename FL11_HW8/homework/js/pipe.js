function pipe (a) {
    for (let i=1; i<arguments.length; i++) {
        a = arguments[i](a)
    }
    return a
} 

function addOne(x) {
    return x + 1;
}

pipe(3, addOne)