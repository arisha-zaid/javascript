let value = Object.getOwnPropertyDescriptor(Math, "PI"); //provides control to change the properties
console.log(value);
// This math wali pie value is not configurable or writable

const myObj = {
    PI: 3.14
};

Object.defineProperty(myObj, 'PI', {
    value: 4,
    writable: false,
    enumerable: false,
    configurable: false
});

console.log(myObj.PI);

