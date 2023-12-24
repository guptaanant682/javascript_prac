//Promises are synatactical sugars that made a code slightly more readable
//but under the hodd it also uses callbacks and other things 

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





let p = new Promise(function(resolve){//you can write anything in place of resolve. the way to write a promise is this only.
    resolve("Hi there");
});

p.then(function(){
    console.log(p)
})