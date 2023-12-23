// date is a class that has been premade for you
// date is a global class
// (global means that it is present fo you to out of the box just like let, var etc. )

const oneLinerJoke = require("one-liner-joke")

// const { json } = require("express/lib/response");

// const currentDate = new Date();

// console.log(currentDate.getDate());
// console.log(currentDate.getYear());//output is 123
// // getYear gives you an integer representing the year for the given date according to local time, minus 1900. Returns NaN if the date is invalid.

// console.log(currentDate.getFullYear());//this will give you eact year


// console.log("current date is: ", currentDate);
// console.log("current date is: ", currentDate.getDate());
// console.log("current Month is: ", currentDate.getMonth());
// console.log("current Hour is: ", currentDate.getHours());
// ;console.log("current Minute is: ", currentDate.getMinutes());
// ;;console.log("current Second is: ", currentDate.getSeconds());

// console.log("Time in milliseconds since 1970: ", currentDate.getTime());//this will print the total millisecods since 1st jan 1970 till now



// function calculateSum(){
//     let a = 0;
//     for(let i=0; i<10000000000; i++){
//         a=a+i;
//     }
//     return a;
// }

// const beforeDate = new Date;
// const beforeTimeInMs = beforeDate.getTime();
// calculateSum();
// const afterDate = new Date;
// const afterTimeInMs = afterDate.getTime();

// console.log((afterTimeInMs - beforeTimeInMs)/1000);//this will print the total time the function took to run;



// WAF that calculates the time (in seconds) it takes for the JS code to calcualte sum from 1 to n, given n as the ouput.
// Try runningit for 
// 1. sum from 1 - 100
// 2. sum from 1 - 100000
// 3. sum from 1 - 100000000
// Hint- use date class exposed in js
// there is no automated test for this one, this is more for you to understand time foes up as computation goes up

// function calculateSum(){
//     let a = 0;
//     for(let i=0; i<100000000; i++){
//         a=a+i;
//     }
//     return a;
// }

// const beforeDate = new Date;
// const beforeTimeInMs = beforeDate.getTime();
// calculateSum();
// const afterDate = new Date;
// const afterTimeInMs = afterDate.getTime();

// console.log((afterTimeInMs - beforeTimeInMs)/1000);//this will print the total time the function took to run;



// function currentTimePrint(){
//     const seconds  = (((new Date().getTime())/5000));
//     console.log("seconds:", seconds);
//     const hourrs = seconds/3600;
//     console.log("hours: ",hourrs);
//     const dayys = hourrs/24;
//     console.log("days: ",dayys);
//     console.log("\n")

// }
// setInterval(currentTimePrint, 1000)



// javascript object notation(json)

const users = '{"name": "infinity", "age": 29, "gender": "Male"}'
//it still looks like an object but it is actually a string and i can send it to other side
//in this way we aren't restricting any javasccript object types when we are sending out our data.
// console.log(users["name"]); //you can't index users of name. this is an string, this is no longer an object
// console.log(users[0])

//to interchange between the javascriptobject anda strings we have some methods like
//JSON.parse
// JSON.stringify

// const user = JSON.parse(users)
//by using this parse method we made string an object
// console.log(user["gender"]);

// const user = {
//     "name": "infinity",
//      "age": 29, 
//      "gender": "Male"

// }

// const finalString = JSON.stringify(user)
// //by using this stringify method we made user object an string
// console.log(finalString)



//now some maths function 
// Math.floor(20.9) => 20
// Math.random()
// Math.ceil(20.1) => 21
// Math.max(3,4,24,4,2)
// Math.min(32,4,24,4)
// Math.pow(value, power)
// Math.sqrt(value)


// like these object also have some function.
// google them and explore those functions.