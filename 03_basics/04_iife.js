//immediately invoked function expression (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
    
})();

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
    
})('hitesh')