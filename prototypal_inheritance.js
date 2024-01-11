// Prototypal inheritance 

// hum objects create krte h and kisi ek parent function ke prototype mein kuch add kr dete hai to wo parent se banne wale sabhi children instances ko wo properties jo parent ko prototype mein di gyi thi saugaat mein.

function makeHuman(name, age){
    this.name = name;
    // {}.name = name;this is same as above line
    this.age = age;
}
let ans = new makeHuman();
console.log(ans);
// ek function jo ki this ka upyog kr rha ho and new ke dwara naye naye objects bna kr deta ho aise function ko constructor function kahte h , jruri nhi h this likha hona chaie

// blank object mein cheeze add krne k liye humee this ka use krna hoga, bina this k data save nhi hoga object mein.

const human1 = new makeHuman("Infinity", 19);

// aisa koi bhi function jismein aap this ka upyog kar rhe ho aur us function ko call karte waqt aap new ka upyog akrein, to new ka matlab waha par ek blank object hojata hai.


// jab hum new lga degte h kisi function k call ke aage tab wo new ek blank object create kr deta hai. Aur jab bhi function call hota h aur jaha jaha par this likha hota h wahan par apka object aa jata hai



// function makeHuman(name, age){
//     this.name = name;
//     this.age = age;
//     this.printMyName = function(){
//         console.log(this.name);
//     }
// }

// const human2 = new makeHuman("Infinity", 19);
// const human3 = new makeHuman("Infinity" , 19);
// ab printMyName method dono humans k paas h aur printMyName ki value sbme same rhegi jbki name aur age change ho rhe h. Dono humans same function le rhe h to extra memory bhi use kr rhe honge usko store krne k lie, aur isi problem ko solve krne k lie jo hota h usse khte hh prototypal inheritance


function makeHuman(name, age){
    this.name = name;
    this.age = age;

}

makeHuman.prototype.printMyName = function(){
    console.log(this.name);
}

const human2 = new makeHuman("Infinity", 19);
const human3 = new makeHuman("Infinity" , 19);
// new krke makuHuman se jo bhi bnega uske paaas wo hoga jo prototype mein add kia h.