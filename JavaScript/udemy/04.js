// Leap Year Coding challenge

function isLeap(year){

    if(year%4==0){
        if(year%100!=0){
            return "Leap year.";
        }
        else{
            if(year%400==0){
                return "Leap year.";
            }
        }
    }
    return "Not leap year.";
}

console.log(isLeap(1948));