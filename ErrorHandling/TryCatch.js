let a = prompt("Enter a number");
let b = prompt("Enter another number");

if(isNaN(a)||isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}
let sum = parseInt(a) + parseInt(b);

function main(){

    let x=3;
    
    try {
        console.log("The sum is " + sum*x)
        return true;
        
    } catch (error) {
        console.log("Error aa gya bhai")
        return false;
    }
    finally{
        console.log("Files are being closed and db connectionis being closed");
    }
}
let c=main()
console.log(c);