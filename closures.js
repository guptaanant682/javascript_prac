// CLOSURES

// aisa koi bhi function jo ek aur function ko return krde usse closure khte h.
// ek function jo return kare doosra function, aur use kare parent function ka koi variable ussey closure khte hain
function counter(){
    var count = 0;
    return function(){
        count++;
        console.log(count);
    }
}

var fnc = counter();
fnc(); // 1
fnc(); // 2
fnc(); // 3



function abcd(){
    var a = 12;
    return function(){
        console.log(a)
    }
}

var ans = abcd();
ans(); // 12

// The essence of a closure in programming. A closure is created when a function is defined within another function(the parent function) and the inner function accesses variables from its outer scope. This inner function, often returned or passed around, "closure over" the variables in its lexical scope, retaining access to then even after the outer function has finished executing. This behaviour allows the inner function to remember and access the variables of its parent function.


function timer(){
    var a = 12;
    return setTimeout(function(){
        console.log(a);
    }, 2000)
}

var ans = timer(); // 12