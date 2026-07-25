// JSON formatter is used to understand api structure
function login(name){
    return `Hello ${name}, you just logged in.`;
}
console.log(login("arisha"));
console.log(login(""));
console.log(login()); // when value is not passsed it remains undefined 

//rest and spread looks same but vocab depends on their usecase
function print(...num){
    return num;
}

console.log(print(300, 500, 400, 100)); // way of passing multiple values in a function

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addOne(2));
function addOne(num){
    return num+1;
}

// console.log(addTwo(2)); // hoisting concept , in case of function expressions this will throw error , i.e. calling function before decalaration.
const addTwo = function(num){
    return num+2;
}

// Note : when you use 'this' in node environment then it's empty {}, where as when do the same on browser it gives window object (its a global object)

function hello(){
    let username = "arisha";
    console.log(this);
    console.log(this.username); //undefined
}

// hello();

let helloExp = function(){
    let username = "arisha";
    console.log(this);
    console.log(this.username); //undefined
}

// helloExp();

let helloArrow = () => {
    let username = "arisha";
    console.log(this); //for arrow function this is empty object
    console.log(this.username); //undefined
}

// helloArrow();

// IIFE (Immediately Invoked Function Expression) - To prevent pollution from global scope, and execute at that point of instance  , wrap function definition in () and () for execution
(function db(){
    console.log('DB CONNECTED'); 
})(); // ; must apply to tell its ending for next code written to run 

((name)=>{
    console.log(`hey ${name}`);
})('arisha'); //passing params