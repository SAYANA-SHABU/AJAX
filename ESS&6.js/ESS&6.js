// "use strict"
// a=5;
// console.log(a);
// var Fname="Sayana";
// console.log(Fname.length);
// console.log(typeof(Fname));


// var data =" This is a txt message";
// console.log(data.length);
// // it proves the position that it located
// console.log(data.indexOf('txt'));
// // replaces the word in the place of txt 
// console.log(data.replace("txt","text"));
// console.log(data);
// console.log(data.split(','));
// console.log(data.length);
// removing white spaces
// console.log(data.trim());
// removing white spaces in starting part
// console.log(data.trimStart());


// let fruits=["Apple","Mango","Orange","Grape"];
// console.log(Array.isArray(fruits));
// forEach
// fruits.forEach(function(item){
//     console.log(item)
// });
// let num = [20,30,58,65];
// num.forEach(function(item,ind){
//     num[ind]=item<50
// })
// console.log(num)


// var obj1=JSON.parse('{"name":"Sayana","age":10}');
// console.log(obj1);
// var obj2=JSON.stringify(obj1);
// console.log(obj2);


// function sum(a,b){
//     var s=a+b;
//     console.log(`The sum is ${s}`);
// }
// sum(10,20);
// // or (arrow function)
// var add=(c,d)=>{
//     console.log(`The sum is ${c+d}`);
// }
// add(10,1)

// var sub=(e,f)=>{
//     console.log(`The difference is ${e-f}`);
// }
// sub(10,1)


// spread operator
// var a=[5,6,7,10,659];
// var b=[45,89];
// var c=[...a,...b];
// console.log(c);
// var d=[2,3,...b];
// console.log(d);


// Array destructuring
var[q,r,s]=[2,3,4];
console.log(r);
var[p,,w]=[2,5,8];
console.log(w);
var[h,,j,...l]=[1,2,3,4,5,6,7]
console.log(l);
