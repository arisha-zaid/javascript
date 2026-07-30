// ES6
class user{
    constructor(username, email){
        this.email = email;
        this.username = username;
    }

    changeuserName(){
        return `${this.username.toUpperCase()}`;
    }
}

const userOne = new user("rishoo","rishoo@gmail.com");
console.log(userOne.changeuserName());

// ------------------------------------------------------------------------------------------------

function users(username, email){
    this.email = email;
    this.username = username;
}

users.prototype.changeuserName = function(){
    return `${this.username.toUpperCase()}`;
}

const userTwo = new users("arisha","arisha@gmail.com");
console.log(userTwo.changeuserName());

// -------------------------------------INHERITANCE------------------------------------------------

class User{
    constructor(username){
        this.username = username;
    }
}

class Teacher extends User{ //inheritance in js of classes

    constructor(username, email, password){
        super(username);
        this.password=password;
        this.email=email;
    }

    addCourse(){
        console.log(`this is new course added for ${this.username}`);
    }

    static createId(){ //sometimes when we don't want to give access of method to instantiated object to make it private in js we use static keyword
        return `123`;
    }
}

const teacher = new Teacher('bob', 'bob@gmail.com', '12345678');
teacher.addCourse()
console.log(teacher.createId());


console.log(teacher instanceof Teacher);
console.log(teacher === Teacher);
