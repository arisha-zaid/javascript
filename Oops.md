# Oops in javascript
Javascript is primarily _prototype based language_ and its classes are _syntactically sugar over existing prototype based inheritance_.

## OOP 
programming __paradigm__ (style of programming)

### objects 
- collections of properties and methods.
- toLowerCase

### parts of OOPs
_object literal_
- constructor
- prototypes
- classes
- Instances (new, this)


__object literal__

> console.log(username); when placed in stack it doesn't know k kaha se username lena h, therefore we use 'this' k usko btayein k current context se lena h (closure property of function - lexical property)

```javascript
const user = {
    username : "arisha",
    loginCount : 8,
    signIn : true,

    getUserDetails : function(){
        // console.log(username);
        console.log(this.username);
    }

}
// object has properties and method

console.log(user.username);
console.log(user.getUserDetails());
```

__constructor__

> new keyword is used to create multiple instance, constructor function gives you new instance copy with which do whatever you want to, without overwritting like that of in case of functions.

```javascript
function user(username, loginCount, signin){
    this.username = username;
    this.loginCount = loginCount;
    this.signin = signin;

    return this;
}
const userOne = user('arisha','1',true);
console.log(userOne);
const userTwo = user('Rishoo','1',true)
console.log(userTwo);
```
> username: 'arisha',
  loginCount: '1',
  signin: true

> username: 'Rishoo',
  loginCount: '1',
  signin: true

>As you can see the overwritting 

```javascript
const userOne = new user('arisha','1',true);
const userTwo = new user('Rishoo','1',true);
console.log(userOne);
console.log(userTwo);
```
>user { username: 'arisha', loginCount: '1', signin: true }

>user { username: 'Rishoo', loginCount: '1', signin: true }

```javascript
console.log(userOne.constructor);
```
>[Function: user], reference hoti h khud hi k baare mein

