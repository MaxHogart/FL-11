let userAgree = confirm('Do you want to play a game?'),
    minNumber = 0,
    maxNumber = 8,
    winNumber = 0,
    userNumber = 0,
    totalPrize = 0,    
    startPossiblePrize = 100,
    attemptsNumber = 3,
    declineCoefPrize = 2,
    ariseCoefNumb = 4,
    ariseCoefPrize = 2;

const firstPrize = 100,
      firstMaxNumber = 8;  

if (userAgree) {
    while (userAgree) {
        winNumber = Math.floor(Math.random() * (maxNumber + 1));
        console.log(winNumber);            
        let possiblePrize = startPossiblePrize;
        for (let i=attemptsNumber; i>0; i--) {
            let textForGame = `Choose a roulette pocket number from ${minNumber} to ${maxNumber}
Attempts left: ${i}
Total prize: ${totalPrize}$
Possible prize on current attempt: ${possiblePrize}$`;
            userNumber = +prompt(textForGame);
            if (userNumber === winNumber) {
                totalPrize += possiblePrize;
                let textForWin = `Congratulation, you won! Your prize is: ${totalPrize}$. Do you want to continue?`;
                userAgree = confirm(textForWin);
                break;
            }
            possiblePrize /= declineCoefPrize;
        }
        if (userNumber !== winNumber || !userAgree) {
            if (userNumber !== winNumber) {
                totalPrize = 0;
            }            
            let textForLose = `Thank you for your participation. Your prize is: ${totalPrize}$`;
            alert(textForLose);
            userAgree = confirm(`Do you want to play again?`);
            if (userAgree) {
                totalPrize = 0;
            }
            startPossiblePrize = firstPrize;
            maxNumber = firstMaxNumber;
        } else {
            maxNumber += ariseCoefNumb;
            startPossiblePrize *= ariseCoefPrize;
        }       
    }
} else {
    alert('You did not become a billionaire, but can.')
}