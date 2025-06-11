const myNums=[1,2,3,4,5,6,7,8,9]

//const newNums=myNums.filter((num)=>{return num>5})

// const newNums = myNums.filter(num => num > 5);
// console.log(newNums);

const newNums=[]
myNums.forEach((num) => {
  if (num > 5) {
    newNums.push(num);
  }
});

console.log(newNums);

const newNums2= myNums.map((num) => num+20)
console.log(newNums2);

const newNums3= myNums
                .map(num=>num*10)
                .map(num=>num+5)
                .filter(num=>num>50)
console.log(newNums3);

const mySum=newNums3.reduce((accumulator, currentValue) => accumulator+currentValue, 0);
console.log(`Sum= ${mySum}`);