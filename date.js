const  getDay = (value) => {
    let date = value;
    const getday = new Date(date);
    let  days = getday.getDay();
     if(days == '1'){
         var day = "Monday";
     }else if(days == '2'){
        day = "Tues";
     }else if(days == '3'){
        day = "WEDNES";
     }else if(days == '4'){
        day = "THUSDay";
    }else if(days == '5'){
        day = "FRIDAY";
    }else if(days == '6'){
        day = "Saturaday";
    }else if(days == '0'){
        day = "Sunday";
    }


console.log(days);
console.log(day);
}

//Extradate("03/31/2013");

exports.getDay = getDay;

