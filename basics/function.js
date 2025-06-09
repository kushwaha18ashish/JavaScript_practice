// function sum(num1,num2){
//     console.log(num1+num2);
    
// }

function sum(num1,num2){
    return num1+num2;
}

//sum(4,8);
const val=sum(4,8);
console.log(val);

function userLoginMessage(username){
    if(!username){
        console.log("Please enter a valid username.");
        return;
        
    }
    return `${username} just logged in.`;
}

//console.log(userLoginMessage("Rohan"));
console.log(userLoginMessage());


