// let person={
//     name:"harika",
//     age:19,
// }

console.log(person.name)
console.log(person["age"])

const {name,age}=person;//destructuring assignment
console.log(name)
console.log(age)

let fruits=["apples","orangr","mango"]
console.log(fruits[0])

let numbers=[1,2,3,4,5]

let squares=numbers.map((num)=>num*num); //transform each element
console.log(squares)

let evens=numbers.filter((num)=>num%2==0) //filter values
console.log(evens)

let sum=numbers.reduce((present,num)=>present+num)
console.log(sum)

    let person=[{
        name:"harika",
        marks:55
    },
    {
        name:"mouni",
        marks:77
    },
    {
        name:"raji",
        marks:87
    }
]
let maxmarks=0;
let toppers="";
for(let person of person){
    if(person.marks>maxmarks){
        maxmarks=person.marks;
        topper=person.name;
    }

}
console.log(`topper is ${topper} and he got ${maxmarks}`)