const  switchgetDay = (value) => {
    let date = value;
    const getday = new Date(date);
    let  days = getday.getDay();
    

switch(days){
    case 0:
    day = "Sunday";
    break;
    case 1:
    day = "MonDay";
    break;
    case 2:
    day = "Tuesday";
    break;
    case 3:
    day = "WEDESDAY";
    break;
    case 4:
    day = "THUSDAY";
    break;
    case 5:
    day = "FRIDAY";
    break;
    case 6:
    day = "Saturaday";
    break;
    default:
        day= "Invalid the day";
        break;

}
console.log(days);
console.log(day);
}
exports.switchgetDay = switchgetDay;