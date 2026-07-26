let arr = [1,2,3,4,5]

//for-of loop - works for array, strings, maps
for (const element of arr) { 
    // console.log(element);
}

// Map
const map = new Map();
map.set('a', 1);
map.set('b', 1);
map.set('c', 1);
// map.get('a');
// map.delete('a');

// console.log(map);
for (const [key, val] of map) {
    console.log(key, " :- ", val );
}


let obj = {
    'java':1,
    'python':2,
    'c++':3
}

for (const key in obj) { //gets keys only , i.e. indexes in arrays and from key you need to access the values but map is not iterable with this.
    // console.log(`${key} : ${obj[key]}`);
}

// Higher Order Function (HOF)
// arr.forEach((ele, indx, arr  )=> console.log(ele));

function printme(val){
    console.log(val);
}

// arr.forEach(printme);//only give reference of callback not execute it here .
// forEach doesn't return any value therefore other methods was introduced 

// filter , map
// if using scope then always use return statement if not then write it in single line 

// Method chaining
arr = [1,2,3,4,5,6,7,8,9];
const result = arr
                .map( (num) => num*10 )
                .map( (num => { return num+1 }) )
                .filter( (num) => num > 40 )
console.log(result);

// reduce(callback(elements, initial value))
let sum = arr.reduce( (num, acc) => num + acc , 0);
console.log(sum);



