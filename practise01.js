console.log("1"+2+2);
console.log(1+2+"2");

// primitive datatype 
// String, Number, null, Symbol(use to uniquesness in components), Boolean, Bigint 
//  undefined -> variable declared h lekin usmien kya value aayegi wo nhi pta 

// Non-Primitive or Reference type
// Array, Object, functions

// Memory types in java 
// stack -> primitive -> you get a Copy
// heap -> non-primitive -> you get a reference 

const balance = new Number(100);
console.log(balance.toString());
console.log(balance.toFixed(2));
const amount = 239.856;
console.log(amount.toPrecision(3));
console.log(amount.toPrecision(4));

const num = 10000000;
console.log(num.toLocaleString()); // according to usa standard commas 
console.log(num.toLocaleString('en-IN')); // for indian stadandards 

let max = 20; let min = 10;
console.log(Math.floor(Math.random()*(max-min+1)) + min);
// +1 to avoid zero, +min so that range starts from min, then max-min+1 to define range till max





