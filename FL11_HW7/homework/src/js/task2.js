let userAgree = confirm('Do you want to play a game?'),
    minNumber = 0,
    maxNumber = 8,
    winNumber = 0,
    // userNumber,
    totalPrize = 0,
    startPossiblePrize = 100,
    attemptsNumber = 3,
    userPrize = 0,
    declineCoefPrize = 2,
    ariseCoefNumb = 4,
    ariseCoefPrize = 2;

if (userAgree) {
    while (userAgree) {
        winNumber = Math.floor(Math.random() * (maxNumber + 1));
        console.log(winNumber);            
        let possiblePrize = startPossiblePrize,
            userNumber = 0;
        for (let i=attemptsNumber; i>0; i--) {
            let textForGame = `Choose a roulette pocket number from ${minNumber} to ${maxNumber}
Attempts left: ${i}
Total prize: ${totalPrize}$
Possible prize on current attempt: ${possiblePrize}$`;
            userNumber = +prompt(textForGame);
            console.log(userNumber);
            if (userNumber === winNumber) {
                userPrize += possiblePrize;
                let textForWin = `Congratulation, you won! Your prize is: ${userPrize}$. Do you want to continue?`;
                userAgree = confirm(textForWin);
                break;
            }
            possiblePrize /= declineCoefPrize;
        }
        console.log(userNumber);
        console.log(possiblePrize);
        if (userNumber !== winNumber) {
            let textForLose = `Thank you for your participation. Your prize is: ${userPrize}$`;
            alert(textForLose);
            userAgree = confirm(`Do you want to play again?`);
        } else {
            maxNumber += ariseCoefNumb;
            startPossiblePrize *= ariseCoefPrize;
        }       
    }
} else {
    alert('You did not become a billionaire, but can.')
}