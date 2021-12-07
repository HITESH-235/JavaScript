let cur_date = new Date();
let cur_day_int = cur_date.getDay();
let arr_days = ["SUNDAY,","MONDAY,","TUESDAY,",'WEDNESDAY,','THURSDAY,','FRIDAY,','SATURDAY,'];
let cur_day = arr_days[cur_day_int];
let cur_hr_int = cur_date.getHours();
if (cur_hr_int <= 3) {
          console.log('HAPPY',cur_day,"IT'S DARK MIDNIGHT!!")
}
else if (cur_hr_int >= 4 && cur_hr_int <=6) {
          console.log('HAPPY',cur_day,"IT'S DAWN, SLEEPING TIME!")
}
else if (cur_hr_int >= 7 && cur_hr_int <=11) {
          console.log('HAPPY',cur_day,"A VERY GOOD MORNING!")
}
else if (cur_hr_int >= 12 && cur_hr_int <=15) {
          console.log('HAPPY',cur_day,"A VERY GOOD AFTERNOON!")
}
else if (cur_hr_int >= 16 && cur_hr_int <=23) {
          console.log('HAPPY',cur_day,"A VERY GOOD EVENING!")
}
else if (cur_hr_int == 24){
          console.log('HAPPY',cur_day,"IT'S DARK MIDNIGHT!!")
}
else {
          console.log("error")          
}