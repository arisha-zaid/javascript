// XMLHttpRequest is also used for api calls

// create 
const promiseOne = new Promise((resolve, reject)=>{ //takes call back
    //Do ansyc task 
    setTimeout(()=>{
       console.log('async task completed');
       resolve();

    }, 1000)
})

promiseOne.then(()=>{ //directly linked to resolve
   console.log("promise consumed");  
})

promiseOne.catch(()=>{ //directly linked to reject
  console.log("Error comes in");
  
})


const promiseTwo = new Promise((resolve, reject)=>{ //takes call back
    //Do ansyc task 
    setTimeout(()=>{
       console.log('async task completed 2');
       resolve({username:"aruu", emai:"aruu@gmail.com"}); //passing data or objects

    }, 1000)
}).then((user)=>{ //y'll get all the parameters passed via resolve
   console.log(user);  
})


// .then() chaining concept
const promiseThree = new Promise((resolve, reject)=>{ //takes call back
    //Do ansyc task 
    let error= true;
    error = false;
    if(!error){
        setTimeout(()=>{
        console.log('async task completed 2');
        resolve({username:"aruu", emai:"aruu@gmail.com"}); //passing data or objects

        }, 1000)
    }
    else{
        reject("ERROR:something went wrong");
    }
}).then((user)=>{ //y'll get all the parameters passed via resolve
   return user.username;  
}).then((username)=>{ //upar wale then ki returned values ye recieve krega and likewise its chained
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{ // always executes 
    console.log("finally the promise is either resolve or rejected");
})


// Async-Await
const promiseFour = new Promise((resolve, reject)=>{ //takes call back
    //Do ansyc task 
    let error= true;
    if(!error){
        setTimeout(()=>{
        resolve({username:"aruu", emai:"aruu@gmail.com"}); //passing data or objects

        }, 1000)
    }
    else{
        reject("ERROR:something went wrong");
    }
})

// async await does'nt handle error gracefully anf therefore we use try and catch to handle it gracefully 
async function consumePromiseFour() {
    try {
        const response =  await promiseFour; // eventual completion object h that's why store in variable
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFour();


// apis
async function users(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); // objcet that returns you a promise
        const data = await response.json();
        console.log(data);
         
    } catch (error) {
        console.log(error);
        
    }
}

// users();


// way2 - It uses thannable approach 
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
    
}).catch((error)=>{
    console.log(error);
    
})