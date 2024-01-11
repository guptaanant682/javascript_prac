//  call apply bind
//  ye teen tareke hai function ko call karne ke kisi object ko this maan kar

function abcd(){
    console.log(this);  // window
}
abcd();
// the value of this function is window here





const obj = {name: "harsh"}

function abcd(){
    console.log(this);  // window
}
abcd.call(obj);//if you want that the value of function should be object instead of than do this method
//when calling the function write ".call"  and pass whatever you want to be the value of this function


const obj2 = {name: "harsh"}

function abcd(){
    console.log(this);  // window
}
abcd.call(123);
// now the value of this is 123



////////////////////////////////apply/////////////////////////

const obj3 = {name: "harsh"}

function abcd(a,b,c){
    console.log(this,a,b,c);  // window
}
abcd.apply(obj3, [1,2,3]); //apply mein paheli value this deni h fir comma lgake dusri values array k form mein deni h jiske andr hum parameters ki value pass kr skte h

///////////////////////////////////////////bind/////////////



