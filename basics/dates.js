let myDate=new Date()
console.log(myDate)
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

let createdDate=new Date(2024,0,25)
console.log(createdDate.toDateString())

let createdDate2=new Date(2024,0,25,6,9)
console.log(createdDate2.toLocaleString())

let createdDate3=new Date("01-25-2024")
console.log(createdDate3.toLocaleString())

console.log(myDate.toLocaleString('default',{weekday:"long"}))