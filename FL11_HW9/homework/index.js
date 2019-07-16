function getNumbers (a) {
    let arr = [];
    a = a.split('')
    for (let i=0; i<a.length; i++) {
        let elem = a[i];
        if (!isNaN(elem) && elem!==' ') {
            arr.push(parseFloat(elem));
        }
    }
    return arr;
}

function findTypes () {
    let objTypes = {};
    for (let i=0; i<arguments.length; i++) {
        let typeOfArg = typeof arguments[i];
        if (objTypes[typeOfArg]) {
            objTypes[typeOfArg]++;
        } else {
            objTypes[typeOfArg] = 1;
        }
    }
    return objTypes;
}

function executeforEach (arr, func1) {
    for (let i=0; i<arr.length; i++) {
        func1(arr[i]);
    }
}

function mapArray (arr, func2) {
    let newArr = [];
    executeforEach(arr, function(el){
        newArr.push(func2(el));
    });
    return newArr;
}


function filterArray (arr, func3) {
    let newArr = [];
    executeforEach(arr, function(el){
        if (func3(el)) {           
            newArr.push(el);            
        }
    })
    return newArr;
}

function showFormattedDate (date) {
    return `Date: ${date.toLocaleString('en-US', {month: 'short'})} ${date.getDate()} ${date.getFullYear()}`;
}

function canConvertToDate (date) {
    return !isNaN(Date.parse(date))
}

function daysBetween (firstDate, secondDate) {
    const milisecAtDay = 8.64e+7;
    let days = Math.round((Date.parse(firstDate) - Date.parse(secondDate))/milisecAtDay),
        coef = -1;
    if (days<0) {
        days*=coef;
    }
    return days
}

function getAmountOfAdultPeople (data) {
    const dayAtYear = 365;
    let neadYear = 18,
        adultArr = filterArray(data, function (el) {
        return daysBetween(new Date(el.birthday), new Date()) > dayAtYear*neadYear;     
    })
    return adultArr.length;
}

function keys(a) {
  let arr = [];
  for (let key in a) {
    if (a[key]) {
      arr.push(key);
    }
  }
  return arr;
}

function values(a) {
  let arr = [];
  for (let key in a) {
    if (a[key]) {
      arr.push(a[key]);
    }
  }
  return arr;
}
