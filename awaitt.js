// // again just syntactical sugars, still uses callbacks/promises under the hood

//async await help to get rid of .then syntax of promises

// const e = require("express");
// const { ReverseSubtractEquation } = require("three");

// ///////////Normal syntax without async await///////////////////
// function Infinity(){
//     let p = new Promise(function(resolve, reject){
//         resolve("Hi there")
//     });
//     return p;
// }

// function main(){
//     Infinity().then(function(value){
//         console.log(value)
//     })
// }

// main();




// /////////Async await syntax////////////////////////////////////////////

function infinity(){
    let p = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("Hi there")    
        }, 3000)
    });
    return p;
}

async function main(){
    const value = await infinity();//it waits for the result 
    console.log("Hi there 1")// it will also get printed after 3 seconds. await function is making the thread busy here. 
    console.log(value);
}
//This will be helpful in making something when we fetch data from somewhere and the async await till we get the data then it executes the function, untill then it executes other programs outside the function that don't really need the data.

main();

console.log("after main");// it will immediately get printed.
// when the await function is completed the thread will start executing the code of the function but untill then it won't execute the code of that function.