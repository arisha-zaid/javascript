//using backTicks we create string interpolation where we can injects varaibles in placeholders

// slice(s,e) , where e= e-1 , we can use -ve indices here 
// substring(s,e) , where e= e-1 , we can't use -ve indices

let s = new String("     abc       ");
// console.log(s.trim());
// console.log(s.replace('ab','xy'));
// console.log(s.includes('x'));

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

// console.log(arr.concat(arr1)); 
// console.log(arr);

newarr = [...arr,...arr1];
console.log(newarr);

//flatenning
let arr3 = [0, 1, [2, 3, [4, 5]], [6, 7], 8, 9];
// console.log(arr3.flat(Infinity)); //() we have depth in this till depth 1 or 2 , here taken infinite means jitni bhi depth ho usko falt kr do
// console.log(arr3);


// console.log(Array.isArray("Arisha"));
// console.log(Array.from("Arisha")); //turns into an array

let score1 = 100;
let score2 = 200;
let score3 = 300;
// console.log(Array.of(score1, score2, score3));
// console.log(Array.from({name:"arisha"}));


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Singleton is created when we create Object using constructor , but not when we create using object literals 


const sym = Symbol("key1");

let user = {
    "full name":"arisha Zaid",
    city:"seoul",
    [sym]:"mykey1" //syntax of writing symbols 
}

// console.log(user."full name");  wrong therefre use different method to access
// console.log(user["full name"]);
// console.log(user.city);
// console.log(user["city"]);
// console.log(user[sym]); //syntax of accessing the symbols no otherway.

user.city = "tokyo";
Object.freeze(user); //though not throws error but will not propogate any changes in user object
user.city = "london";
console.log(user);


let obj2 = {
    name:"arisha",
    degree:"bachelors"
};

obj2.greet = function(){ //creating function in that object 
    console.log(`hello ${this.name}`);
}

obj2.greet();


let ob1 = {
    1:'a',
    2:'b'
}

let ob2 = {
    3:'a',
    4:'b'
}

let ob3 = {
    5:'a',
    6:'b'
}

let ob = {...ob1, ...ob2, ...ob3};
// console.log(ob);

let ob4 = Object.assign({}, ob1, ob2, ob3); // giving {} isoptional just that looks cleaner , all sources are put here in first one target
// console.log(ob4);

// console.log(Object.keys(ob4));
// console.log(Object.values(ob4));
// console.log(Object.entries(ob4));

// console.log(user.hasOwnProperty('country'));
// console.log(user.hasOwnProperty('city'));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//destructuring 
let {city} = user;
console.log(city);

let {city:c} = user;
console.log(c);






















