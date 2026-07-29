
// --------------------------------------------new keyword------------------------------------------
function createUser(username, score){
    this.username = username;
    this.score = score
}

createUser.prototype.increment = function(){
    // score++; confuses k 100 ko increase krna h ya 99 ko, like rishoo ne y arisha ne bulaya h 
    this.score++; //jisne bhi bulaya h uska score , current context
}
// using .prototype is just extra constant therefore js gives you syntactical sugar, skip prototye and use map directly in arrays 

createUser.prototype.printme = function(){
    console.log(`my name is ${this.username}`);
    
}

// const userOne = createUser('Rishoo', 100);
// const userTwo = createUser('arisha', 99);
// userOne.printme(); will give you TypeError: Cannot read properties of undefined (reading 'printme'), actually properties inject hui h but use bind krne k liye we have to use new keyword

const userOne = new createUser('Rishoo', 100);
const userTwo = new createUser('arisha', 99);
userOne.printme();
userTwo.printme();

// new kwyword initiates the creation of new js objects then a prototype property of a constructor  is linked along with its methods and properties then constructor is called


// ------------------------------------------prototype-----------------------------------------------

// prototypical inheritance 
const assistantSupport ={
    name :'Bob'
}
const TASupport={
    support : true,
    __proto__: assistantSupport //reference , inheritance
}

// Or
// TASupport.__proto__= assistantSupport;

// Modern syntax
const animal ={
    walk : function(){
        console.log("walking");
    } 
}

const cat = {
    sound : function(){
        console.log("meow");
        
    }
}
Object.setPrototypeOf(cat, animal);  // to, from
cat.sound();
cat.walk();

// Example set challenge : give all strings inbuilt property of trueLength
let status = "   R loves A & A Loves R    "
String.prototype.trueLength = function(){
    console.log(this);
    console.log(`The true length is: ${this.trim().length}`);
}
status.trueLength();
console.log(status.length);


