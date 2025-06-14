var a="15"
var b=15


console.log(a==b);

console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);

var num=2;
var result =num%2===0? "Even":"Odd"
console.log(result)

var mark=35
var result = (mark>=80)? "O":(mark>=60)? "A+":(mark>=35)?"P":"F"
console.log(result);


function sum(a,b){
    console.log(a+b); 
} 
sum(10,20)
var sum =()=>{
    var a=10;
    var b=20;
    console.log(a+b);
    
}
sum();

let arr = [10,20,30,40];
let arr2 = [...arr,50,60,70]
console.log(arr);
console.log(arr2);

var marks =[90,95,99,97,100];
var [m1,m2,m3,m4,m5] = marks;
console.log(m1);
console.log(m2);
console.log(m3);
console.log(m4);
console.log(m5);





















