//What is the year today?
const now = new Date()
console.log(now.getFullYear())

//What is the month today as a number?w 
const month = new Date()
console.log(month.getMonth()+1)

//What is the date today?
const date=new Date()
console.log(date)

const date2= new Date()
console.log(date2.getDate())

//What is the hours now?
const hour = new Date()
console.log(hour.getHours())

//What is the minutes now?
const min = new Date()
console.log(min.getMinutes())


//Find out the numbers of seconds elapsed from January 1, 1970 to now.
const sec= new Date()
console.log(sec.getTime())

/*Write a script that prompt the user to enter number of years. Calculate the number of seconds a
person can live. Assume some one lives just hundred years
o Enter number of yours you live: 100
o You lived 3153600000 seconds.*/
let a=31536000;
let b = prompt("Enter number of years you live")
console.log(` you lived ${a*b } seconds`)
/*Create a human readable time format using the Date time object
o YYYY-MM-DD HH:mm
o DD-MM-YYYY HH:mm
o DD/MM/YYYY HH:mm*/

let format= new Date();
console.log(`${format.getFullYear()}-${format.getMonth()+1}-${format.getDate()} ${format.getHours()}:${format.getMinutes()}` )
console.log(`${format.getDate()}-${format.getMonth()+1}-${format.getFullYear()} ${format.getHours()}:${format.getMinutes()}`)
console.log(`${format.getDate()}/${format.getMonth()+1}/${format.getFullYear()} ${format.getHours()}:${format.getMinutes()}`)

/*Create a human readable time format using the Date time object. The hour and the minute should be
all the time two digits (7 hours should be 07 and 5 minutes should be 05 )
o YYYY-MM-DD HH:mm eg. 2021-09-16 12:05*/
console.log(`${format.getFullYear()}-0${format.getMonth()+1}-${format.getDate()} ${format.getHours()}:${format.getMinutes()}`)



