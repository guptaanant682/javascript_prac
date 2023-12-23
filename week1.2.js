let FirstName = "Anant";
let LastName = "Gupta";
let gender = prompt("enter Your Gender in single capital character: ")

function greet(FirstName, LastName){

    if(gender == "M"){
        console.log(`Good Morning Mr. ${FirstName } ${LastName}`);
    }

    else if(gender == 'F'){
        console.log(`Good Morning Mrs. ${FirstName } ${LastName}`);

    }
    else{
        console.log("Enter your gender again: ")
    }


}

greet(FirstName, LastName)