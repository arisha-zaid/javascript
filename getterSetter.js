
// --------------------------------getters & setters using class ------------------------------

class User{
    constructor(email, password){
        this.email=email;
        this.password = password;
    }

    // you must define both if want to work with even one
    get password(){ //getter method
       return `${this._password.toUpperCase()}Risha`;
    }

    set password(value){ //setter method
        this._password = value; //can't use password, cuz its private use _variable
    }
}

const userOne = new User("arisha@gmail.com", "abc");
console.log(userOne.password); //will provide getter wala setted password
userOne.password = "micro"; //setting up , calling setter
console.log(userOne.password); 


// --------------------------------getters & setters using Functions ----------------------------

function Users(email, password){
        this._email = email;
        this._password = password;

        Object.defineProperty(this, 'email', {
            get : function(){
                return `${this._email.toUpperCase()}`
            },
            set : function(value){
                this._email = value;
            } 
        })

        Object.defineProperty(this, 'password', {
            get : function(){
                return `${this._password.toUpperCase()}`
            },
            set : function(value){
                this._password = value;
            } 
        })
}

const userTwo = new Users("abc@gmail.com", "abc");
console.log(userTwo.email);
userTwo.email = "abcde@gmail.com";
console.log(userTwo.email);

// --------------------------------getters & setters using object ----------------------------

const UserObj = {
    _email : "aru@gmail.com",
    _password :"aruu",

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    }
}


const userThree = Object.create(UserObj);
console.log(userThree.email);
userTwo.email = "abcde@gmail.com";
console.log(userTwo.email);