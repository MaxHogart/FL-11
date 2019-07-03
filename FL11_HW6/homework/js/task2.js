let firstSide = +prompt('Введіть довжину першої сторони',0),
    secondSide = +prompt('Введіть довжину другої сторони',0),
    thirdSide = +prompt('Введіть довжину третьої сторони',0),
    condOne = firstSide+secondSide>thirdSide && firstSide+thirdSide>secondSide && secondSide+thirdSide>firstSide,
    condTwo = firstSide > 0 && secondSide > 0 && thirdSide > 0;

if (condOne && condTwo) {
    if (firstSide === secondSide && secondSide === thirdSide) {
        console.log('Eequivalent triangle')
    } else if (firstSide === secondSide || secondSide === thirdSide || thirdSide === firstSide) {
        console.log('Isosceles triangle')
    } else {
        console.log('Normal triangle')
    }
} else {
    console.log('Triangle doesn’t exist');
}