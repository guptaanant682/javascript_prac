//Promises are synatactical sugars that made a code slightly more readable
//but under the hodd it also uses callbacks and other things 

const { trackForMutations } = require("@reduxjs/toolkit/dist/immutableStateInvariantMiddleware");

//creating an asynchronous function of our own(ugly way)

// const fs = require("fs");

// //it is just an wrapper on top of another async function
// function infinity(cb){
//     fs.readFile("a.txt", "utf-8", function(err, data){
//         cb(data);
//     })
// }

// function onDone(data){
//     console.log(data)

// }
// infinity(onDone);


/////////////////////////////////////////////////////////////////////////////////////
// cleaner way to write Promises

// const fs = require("fs");

// function infinity(cb){
//     return new Promise(function(resolve){
//         fs.readFile("a.txt", "utf-8", function(err, data){
//             resolve(data);
//         });
//     })

// }

// function onDone(data){
//     console.log(data)

// }
// infinity().then(onDone);


//////////////////////////////////////////////////////////////////////


// let p = new Promise(function(resolve){//you can write anything in place of resolve. the way to write a promise is this only.
//     resolve("Hi there");
// });

// p.then(function(){
//     console.log(p)
// })



//////////////////////////////////////////////////////////////////////////////


// const PromiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task is complete");
//         resolve()//resolve method is directly connected to the .then function and we can send data through this resolve function
//     }, 1000)
// })

// PromiseOne.then(function(){
//     console.log("Promise consumed");
// })



/////////////////////////////////////////////////////////////////////////////

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)


// }).then(function(){
//     console.log("Async 2 resolved");
// })




////////////////////////////////////////////////////////////////////////////////////////////////

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email: "infinity@example.com"})//usually we get data in form of objects
//     }, 1000)
// })


// promiseThree.then(function(user){
//     console.log(user);
// })



//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username: "Infinity", password: "123"})
//         } else{
//             reject('Error: Something went wrong');
//         }
//     }, 1000)
// })

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username//this will not work, it doesn't return anything
// })
// .then((username) => {// Here i am doing chainig of functions to get the specific data
//     console.log(username);
// })
// .catch(function(error){  // .catch() function is directly associated to the reject function that we have passed as an argument in the promise function
//     console.log(error);
// })
// .finally(() => console.log("The promise is either resolved or rejected"))//attaches a callback when the promise is settled(resolved or rejected).



//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const promiseFive= new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "javascript", password: "12345"})
        } else{
            reject('Error: Something went wrong')
        }

    }, 1000)
});

async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response);
}

// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
// }

consumePromiseFive();
