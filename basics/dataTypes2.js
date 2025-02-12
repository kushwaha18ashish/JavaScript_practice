//array ,Object ,functions  -Non-primitive DataTypes

const heros=["Ironman","Thor","Captain America","Hulk"]

let myObj={
    name:"Sohan",
    age:26,
}

const myFunction=function(){
    console.log("Hello World")
}

myFunction()

console.log(myObj)
console.log(heros)

//primitive(Stack)->passes copy    Non-primitive(Heap)->passes reference

let myEmail="abc@gmai.com"
let newEmail=myEmail
newEmail="xyz@gmail.com"

console.log(myEmail)
console.log(newEmail)

let account1={
    username:"thor",
    password:12345
}

let account2=account1

account2.password=54321

console.log(account1)
console.log(account2)