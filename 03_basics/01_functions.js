function addTwoNumbers(number1,number2){

    let result=number1+number2;
    return result;
}
const result=addTwoNumbers(3,5);

// console.log("Result : ",result);


function loginUserMessage(username="sam"){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("virat"));

function calculateCartPrice(val1,val2,...num1){ //rest operator (...)
    return num1
}
// console.log(calculateCartPrice(200,400,500,2000));

const user={
    username:"hitesh",
    price:199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
handleObject({
    username:"sam",
    price:199
})

const mynewArray=[200,400,100,600]

function returnSEcondValue(getArray){
    return getArray[1]
}
console.log(returnSEcondValue(mynewArray));
