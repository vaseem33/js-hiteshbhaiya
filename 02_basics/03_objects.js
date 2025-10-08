//singleton
//Object.create
//object literals


const mySym=Symbol("key1")


const jsuser={
    name:"Hitesh",
    "full name":"Hitesh Choudhary",
    [mySym]:"mykey1",
    age:20,
    location:"jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["full name"]);
console.log(jsuser[mySym]);

jsuser.email="hitesh@chatgpt.com"
// Object.freeze(jsuser) //it is used to freeze the object
jsuser.email="hitesh@microsoft.com"
console.log(jsuser);

jsuser.greeting=function(){
    console.log(`Hello JS user`);
    
}
jsuser.greetingTwo=function(){
    console.log(`Hello JS user,${this.name}`);
    
}

console.log(jsuser.greeting); // op=>function (anonymous)
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());

