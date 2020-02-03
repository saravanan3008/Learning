function dates(val){
    var datess = val;
    var days = new Date(datess);
    var dattts = days.getDay();
     if(dattts == '1'){
         var day = "Monday";
     }else if(dattts == '2'){
        day = "Tues";
     }else if(dattts == '3'){
        day = "WEDNES";
     }else if(dattts == '4'){
        day = "THUSDay";
    }else if(dattts == '5'){
        day = "FRIDAY";
    }else if(dattts == '6'){
        day = "Saturaday";
    }else if(dattts == '7'){
        day = "Sunday";
    }


console.log(dattts);
console.log(day);
}

dates("03/01/2013");
