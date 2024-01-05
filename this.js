// global window
console.log(this);//kisi bhi function k andr hamara code na ho/ kisi bhi scope k andr code na ho to vo global scope mein hota h


// function - window
function abcd(){
    console.log(this);
    //ab hum function k andr h to ye function scope h
}
abcd();

// method - object
var obj = {
    name: function(){
        console.log(this); //object mein jab hum ek field ki value function krdi to ise hum method kahte hain
        //// aisa function jo object k andr ho use hum method khte h
    },
    age: 25,
    email: "asdfgh@gmail.com"
}
obj.name;   //yha hum is method ko call kr rhe h aur this k andr ye object h to this object ko print krega

var obj1 = {
    name: function(){
        console.log(this.age);//this will print the age 
    },
    age: 25,
    email: "asdfgh@gmail.com"
}
obj1.name(); 


// fnc inside method(es5) - window
var obj2 = {
    sayName: function(){
        console.log(this); //yeh object ko refer kr rha h to iske through hum iss object k saare fields access kr skte h
        function childFunction(){
            console.log(this); // yeh window ko refer kr rha h. you can't access the other fields of the object because it is referring to window not the object.
        }
        childFunction();
    },
    age: 25,
    email: "asdcv@gmail.com"
}
obj2.sayName(); //



// function inside method (es6) - object

var obj3 = {
    sayName: function(){
        const child = () =>{ // arrow function jo ki es6 mein hote h yeh. es6 function inside method object return krte h
            //es5 functions value rebind krte h aur
            // es6 functions value parent se lete h
            console.log(this);
        }
        child();
    },
    age: 25,
    email: "asdfghy@gmail.com"
}
obj3.sayName();


// constructor functions mein this ki value - new blank object hoti

function add(){
    console.log(this);
}
const ans = new add(); //ye constructor h aur yeh blank object rreturn krega


// event listener mein this ki value - that element jispar event listener laga ho
document.querySelector("button")
.addEventListener("click", function(){
    console.log(this);
    // event listener mein this ki value wo hoti h jispar event listener laga hota h aur iss case mein button h this ki value.
})