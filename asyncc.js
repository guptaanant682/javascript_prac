// function findSum(n){
//     let ans = 0;
//     for (let i=0; i<n; i++){
//         ans += i;

//     }
//     return ans;
// }

// function findSumTill100(){
//     console.log(findSum(100));
// }

// setTimeout(findSumTill100, 1000)//cpu will proceed, it will not wait here for 1 second
// console.log("Hello World!");//this will executes first because of the setTimeout function that made the function asynchronous funciton
// the above function is an async function


//There are few ways to make this a async function synchronous function
//one of them is busy waiting



// function findSum(n){
//     let ans = 0;
//     for (let i=0; i<n; i++){
//         ans += i;

//     }
//     return ans;
// }

// function findSumTill100(){
//     console.log(findSum(100));
// }

// function syncSleep(){
//     let a=0;
//     for(let i=0; i<1000000000; i++){
//         a++
//     }
// }// here, we are making thread busy to make it synchronous

// syncSleep();
// findSumTill100();
// console.log("Hello World!");









//Async funtion to read a file in your file system

const fs = require("fs");
//Requiring an external node js library that let's you do few things like reading and writing in a file. FS stands for file system

fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data);
})//this function will run after some time because here we delegated that task to somewhere else.

console.log("Hi there")//this will run first.


let a=0;
for(let i=0; i<1000000000; i++){
    a++;
}

console.log("Hi There 2");