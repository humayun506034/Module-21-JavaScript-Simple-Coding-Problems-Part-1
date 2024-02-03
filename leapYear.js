function isLeapYear(year){
    if((year % 100 !== 0 && year % 4 ===0 ) || (year %100 === 0 && year % 400===0) ){
        return true;
    }
    return false;
    
}

const year = isLeapYear(2016);
console.log(year);

