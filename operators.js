//arthemetic operators

let x=10,y=3;

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)
console.log(x**y)

//assignment operatos
let z=4;
z+=3;
console.log(z)
z*=2;
console.log(z)
z-=4;
console.log(z)
z/=2;
console.log(z)
z%=2;
console.log(z)

//comparision operators

let a=10,b="10";

console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)
console.log(a<=b)
console.log(a>=b)
console.log(a<b)
console.log(a>b)

//logical operators
let age=20;
console.log(age>=20 && age<=40)
console.log(age<20 || age>20)
console.log(!(age<18))

//string operators
let firstName="harika"
let lastName="Kompalli"
let fullName=firstName+""+lastName;
console.log(fullName)
let correctName=`hello ${firstName} ${lastName},welcome to  dev astra`
console.log(correctName)

//ternary operators
let myage=19;
if(myage>=18){
    console.log("eligible to vote")
}
else{
    console.log("you cannot vote")
}
let result=myage>=18 ? "eligible to vote":"you cannot vote"
console.log(result)

//increment and decrement operators

let count=5;
console.log(count++)
console.log(count)
console.log(++count)

//typeof operators

console.log(typeof count)
console.log(typeof "harika")
console.log(typeof 18)





