function formatTime (a) {
    let day = 0,
        hour = 0,
        minute = 0;
    day = (a-a%1440)/1440;
    a %= 1440;
    hour = (a-a%60)/60;
    minute = a%60;
    return `${day} day(s) ${hour} hour(s) ${minute} minute(s).`
}

formatTime()