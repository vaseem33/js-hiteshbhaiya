const user={
    username:"Hitesh",
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
        // console.log("Got user details from database"); 
        // console.log(`Username: ${this.username}`);
        console.log(this);      
    }

}



// console.log(user.username);
// // console.log(user.getUserDetails());
// console.log(this);


function User(username,logincount,isloggedin){
    this.username=username;
    this.loginCount=logincount;
    this.signedIn=isloggedin

    // return this
}

const userOne = new User("hitesh",12,true)
const userTwo=new User("ChaiAurCode",19,false)
console.log(userOne);
