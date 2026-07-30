// For nested functions getters and setter example 

function setUsername(username){
    this.username = username
}

function createUser(username, email, password){
    setUsername(username);
    // createUser { email: 'arisha@gmail.com', password: '12345678' }, it's creating user but not setting the username, actaully mein setUsername call ho rha h but after completion it is removed from execution context and therefore saari values changed removed ho jaati h , we need to explicitly call it by using .call

    setUsername.call(this, username); //gives reference hold, usse kaha k apna this use mt kro mera kro , mein de rha, ab ye apka this use krega 
    this.email=email;
    this.password=password;
}

const user = new createUser("arisha", "arisha@gmail.com", "12345678");
// console.log(user); createUser { email: 'arisha@gmail.com', password: '12345678' },
console.log(user);