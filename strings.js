//using backTicks we create string interpolation where we can injects varaibles in placeholders

// slice(s,e) , where e= e-1 , we can use -ve indices here 
// substring(s,e) , where e= e-1 , we can't use -ve indices

let s = new String("     abc       ");
console.log(s.trim());
console.log(s.replace('ab','xy'));
console.log(s.includes('x'));

let s1 = new String("hello-monica-hows-your-day");
console.log(s1.split('-')); //splits or convert into array based on '-'

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let arr = new Array(0,1,2,3,4,5);
// console.log("A) ", arr);
// console.log("slice : ",arr.slice(1,3));
// console.log("B) ", arr);
// console.log("splice : ",arr.splice(1,3));
// console.log("C) ", arr);

let arr1 = [6,7,8,9];

// arr.push(arr1);
// console.log(arr); // [ 0, 4, 5, [ 6, 7, 8, 9 ] ]

console.log(arr.concat(arr1)); 
console.log(arr);

newarr = [...arr,...arr1];
console.log(newarr);

//flatenning
let arr3 = [0, 1, [2, 3, [4, 5]], [6, 7], 8, 9];
console.log(arr3.flat(Infinity)); //() we have depth in this till depth 1 or 2 , here taken infinite means jitni bhi depth ho usko falt kr do
console.log(arr3);


console.log(Array.isArray("Arisha"));
console.log(Array.from("Arisha")); //turns into an array

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
console.log(Array.from({name:"arisha"}));


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++













