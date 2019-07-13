function getMin () {
    let min = arguments[0];
    for (let i=1; i<arguments.length; i++) {
        if (min>arguments[i]) {
            min = arguments[i];
        }
    }
    return min
}
getMin(-5, 1, -8);