// hofs = higher order functions

// aisa koi func jo ki ek fnc ko parameter mein accept karle and/or ek function ko return karde

function defg(params){

};

defg(function(){});


function abcd(){
    return function(){

    }
}

// hofs - aisa kuch bhi jo function ko return Krde 
// lekin
// closure mein ek difference yeh hota h ki returning function parent function ka variable use krega

var arr = [1,2,3,4,5,6];

arr.forEach(function(){

});

// foreach ek higher order function h