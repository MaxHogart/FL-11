let aX = +prompt('Введіть координату точки А по осі Х', 0),
    aY = +prompt('Введіть координату точки А по осі Y', 0),
    bX = +prompt('Введіть координату точки B по осі Х', 0),
    bY = +prompt('Введіть координату точки B по осі Y', 0),
    cX = +prompt('Введіть координату точки C по осі Х', 0),
    cY = +prompt('Введіть координату точки C по осі Y', 0),
    middlePoitX = (aX + bX)/2,
    middlePoitY = (aY + bY)/2,
    check = cX === middlePoitX && cY === middlePoitY;
console.log(Boolean(check));

