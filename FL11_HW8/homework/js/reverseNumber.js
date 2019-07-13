function reverseNumber (a) {
    let digit = 10,
        check = true,
        reverseNumber = 0; 
    while (check) {
        let digitNumb = a%digit;
        a = (a-digitNumb)/digit;
        reverseNumber = (reverseNumber*digit)+digitNumb;
        if (a===0) {
            check=false;
        }
    }
    return reverseNumber
}
reverseNumber(-5567);