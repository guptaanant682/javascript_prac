// const dog = {
//     name: "dog",
//     legcount: 4,
//     speaks: "bhow bhow"
// };


// const cat = {
//     name: "cat",
//     legcount: 4,
//     speaks: "meow meow"
// };

// //animal x bhow bhow with 2 legs

// console.log("animal " + dog["name"] + " " + dog["speaks"])
// console.log("animal " + cat["name"] + " " + cat["speaks"])

//instead of making objects like this which have something in common make classes of them that is more easier and conveniet method

class animal {
    constructor(name, legCount, speaks){
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    static myType(){
        console.log("animal")
    }
    //static methods are not associated to any object, they are associated to the class itself.
    // static method is  a function that belongs to a class, but not to any particular instance of that class.
    speak(){
        console.log(`${this.name} makes a noise`)
    }
}


console.log(animal.myType())
console.log(animal.speak())//this will not run
// if you want to call something directly from the class, you have to make it static method.
let dog = new animal("dog", 4 , "bhow bhow");
let cat = new animal("cat", 4 , "meow meow");

dog.speak();




