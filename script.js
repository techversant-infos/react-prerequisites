
/// MODULES

// import Engineer from "./engineer.js"

// // import Engineer,{getFunction as myfunc} from "./engineer.js"  //named instance
// const developer = new Engineer("Lajin","MCA");



// console.log(developer);
// // myfunc();


//DEFAULTS and NAMED EXPORTS

//named export
//import {Engineer} from "./engineer"

//Default
// import Person from "./engineer"

// import {Engineer} from "./engineer"

// const developer = new Engineer("Lajin","MCA");

// console.log(developer);

/* Hoisting is a JavaScript mechanism where variable and function declarations are moved (or "hoisted") to the top of their containing scope during compilation. 
However, only the declarations are hoisted, not the initializations. */

// variable Hoisting
// console.log(x); 
// var x = 5;
// console.log(x); 

// console.log(x); // reference error
// let x = 5;
// console.log(x); 

//Function Hoisting

// sayHello(); 

// function sayHello() {
//   console.log("Hello, World!");
// }



//var vs let and const

// var function scoped ()
// let , const braces scoped {}
// var will be added to window scope


// function example() {
//     if (true) {
//         var x = 10;
//         let y = 20; 
//         const z = 30;
//     }
//     console.log(x); 
//     console.log(y); // ❌ ReferenceError: y is not defined
//     console.log(z); // ❌ ReferenceError: z is not defined
//   }
  
//   example();


/* Data Type */

/* Primitive Types */

// Strings
// Number
// Boolean
// undefined
// null

/*   Reference Types */
//Objects {}
//Arrays []
//Functions ()


//reference Type example - array

// let a = [10,20];
// let b = a;

// b[2] = 30; 
// console.log(a);
// console.log(b);

// a = [30,40]  //  Reassign "a" to a new array
// b[2] = 30; 

// console.log(a);
// console.log(b);



// if(-5){
//     console.log("IN IF");
// }
// else{
//     console.log("INELSE");
// }






//undefined vs 'undefined'



if (typeof x === "undefined")
    console.log("It's undefined")
else
    console.log("It's defined")    

if (x === undefined)
    console.log("It's undefined")
else
    console.log("It's defined")




//conditionals
//falsy vs truthy values
// 0, false, Nan, null, document.all




//Arrays: DS used to represent a list of items
//[] array literal
// let marks = [20,35,"hello",3.5,44]

// console.log(marks)

// console.log(typeof(marks));







//Objects
//obejct literal {}

// let person = {
//     name: "Lajin",
//     age: "18"
// }

// console.log(person) 
// person['name'] = "Lajin Mohan" //bracket noptation
// console.log(person.name) //dot notation



// function getProprtyName(){
//     console.log("Name:")
//     console.log(person[document.getElementById('name').value])
//     console.log(person);
// }


//for Loop

// Print numbers from 1 to 5
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// //Array iteration
// const fruits = ['apple', 'banana', 'orange'];

// // Print each fruit in the array
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }


// Creating a 2D array
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// // // Iterate through each row and column of the matrix
// for (let row = 0; row < matrix.length; row++) {
//     for (let col = 0; col < matrix[row].length; col++) {
//         console.log(matrix[row][col]);
//     }
// }



//const fruits = ['apple', 'banana', 'orange'];

// Using forEach to iterate over array elements
// fruits.forEach(function (fruit) {
//     console.log(fruit);
// });



//while - loop

//const fruits = ['apple', 'banana', 'orange'];
// let index = 0;

// while (index < fruits.length) {
//     console.log(fruits[index]);
//     index++;
// }

//do - while loop
//Generate randon numbers until random numebr generated is greater than 0.5
// let randomNumber;

// do {
//     randomNumber = Math.random();
//     console.log(randomNumber);
// } while (randomNumber < 0.5);


//functions

// Function declaration
// function greet(name) {
//     return 'Hello, ' + name + '!';
// }

// Function call
// var greeting = greet('Lajin');
// console.log(greeting); 


// Function expression
// var add = function (a, b) {
//     return a + b;
// };


// var sum = add(3, 5);
// console.log(sum); 


// ​​Anonymous function: It is a function that does not have any name associated with it
// Anonymous function as a parameter
// var numbers = [1, 2, 3, 4];

// numbers.forEach(function (num) {
//     console.log(num * 2);
// });


// Anonymous function assigned to a variable
// var add = function (a, b) {
//     return a + b;
// };

// // Using the anonymous function
// var result = add(3, 5);
// console.log(result); 



//Demostrating diffrences between var and let


// function sayHelloUsingVar(){
//   for(var i=1;i<=10;i++){
//     console.log(i)
//   }
//   console.log(i)
// }

// function sayHelloUsingLet(){
//   for(let i=1;i<=10;i++){
//     console.log(i)
//   }
//   //console.log(i)
// }

// sayHelloUsingVar();
// sayHelloUsingLet();

//Demostrating const

// function sayHelloUsingConst(){
//   for(const i=1;i<=10;i++){
//     console.log(i)
//   }
//   //console.log(i)
// }

//sayHelloUsingConst();



//Arrow functions


// const area = function(radius){
//   return Math.PI*radius*radius;
// }

//console.log(area(2)) 




// const area = radius=>{
//  return Math.PI*radius*radius;
// }

//console.log(area(2))

//const area = (radius)=> Math.PI*radius*radius;
//const area = radius=> Math.PI*radius*radius;

// console.log(area(2))


//template literals

// const name = "John";
// const age = 30;

// const greeting = "Hello, my name is ${name} and I am ${age} years old.";
// //Using template literals
// const greeting = `Hello, my name is ${name} and I am ${age} years old.`;

// console.log(greeting);

// const multilineString = `
//   This is a multiline string.
//   It allows for easy formatting.
//   No need for escape characters or concatenation.
// `;

// console.log(multilineString);

// const a = 5;
// const b = 10;

// const result = `The sum of ${a} and ${b} is ${a + b}.`;

// console.log(result);



// Higher-order functions: takes another function as agrument or retuns a function


 //const radius =[6, 35, 7, 9]

// const calculateArea = function (radius){
//   const output=[];
//   for(let i=0;i<radius.length;i++){
//     output.push(Math.PI*radius[i]*radius[i])
//   }
//   return output;
// }


//   console.log(calculateArea(radius));

// const calculateCercumferance = function (radius){
//   const output=[];
//   for(let i=0;i<radius.length;i++){
//     output.push(2* Math.PI*radius[i])
//   }
//   return output;
// }


//   console.log(calculateCercumferance(radius));


// const area = function (radii){
//     return Math.PI*radii*radii;
// }

// const circumferance = function (radii){
//   return 2* Math.PI*radii;
// }

// const calculate = function (radius,func){
//   const output=[];
//   for(let i=0;i<radius.length;i++){
//     output.push(func(radius[i]));
//   }
//   return output;
// }

//  console.log(calculate(radius,area));
//  console.log(calculate(radius,circumferance));


//DOM Manipulation

//4 Pillers of JS

// // 1. Selection of an element in HTML

// let h2 = document.querySelector("input[name=name]");
// console.log(h2);

// //2. changing HTML
// h2.innerHTML = "New text!";

// //3. Changing CSS
// h2.style.backgroundColor= 'black';
// h2.style.color='yellow'

// //4. Event Listener
// h2.addEventListener("click",function(){
//   h2.innerHTML = "Just Clicked";
//   h2.style.backgroundColor= 'white';
//   h2.style.color='black';
// });





//The this object

// const person = {
//     name: `Lajin`,
//     age: 25,
//     greet(){
//         console.log(this);
//     }
// }

// person.greet();


// console.log(this);

// const greet = person.greet;
// console.log(greet) //function



// greet(); //window object



// for all normal function calls, this points to the window onject
// if this it's part of a method (function inside a object), points to the object

//Binding this

//using bind() we can set the value of this permenently.
// const greet1 = person.greet.bind(person);
// greet1(); //window object

// function testFun(){
//     console.log(this);
// }

// testFun();

// const laptop = {
//   cpu: `i7`,
//   ram: `32 GB`,
//   make:"Dell",
//   getConfig(){

//     console.log(laptop.cpu);
//     //   console.log(`cpu: ${this.cpu},
//     //     ram: ${this.ram},
//     //     brand: ${this.make}
//     //     `);
      

//   }
// }
// laptop.getConfig();



// forEach: The forEach method is used for iterating over elements in an array and performing a specified action on each element.
// Use forEach when you want to iterate over the elements of an array and perform an action for each element. 

// Example using forEach to log each element in an array
// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((number) => {
//   console.log(number);
// });


// Using forEach to square each number and log the result
// numbers.forEach((number, index, array) => {
//   console.log(`Element at index ${index} is  ${array[index]}, and it's square: ${number * number}`);
// });



          
// Map: This method is used for creating a new array by applying a provided callback function to each element of the original array.
// Usecase: Use map when you want to transform each element of an array and create a new array with the results.

// const colors = ["red","green","blue"];
// const colorList = colors.map(color => `<li>${color}</li>`); //using Template literals

// console.log(colorList);


// const students =  [
//     {name:"John",sex: 'M', age:19},
//     {name:"Mary",sex: 'F',age:14},
//     {name:"Druv",sex: 'M',age:19},
//   ]

//   const listName = students.map((student)=>{return `<li>${student.name}</li>`})
  // console.log(resultString);


// const resultString = listName.join('');
// console.log(resultString);

// let out = "";
// students.forEach(function(student){
//   out += `<li>${student.name}</li>`
// })

// console.log(out);

// Filter: this method creates a new array with elements that pass a certain condition
//Usecase: Use filter when you want to create a new array with elements that satisfy a certain condition

//Find even numbers in an array
//console.log(numbers.filter((num,index,array)=>{return num%2==1}));


// const fo = students.filter((student)=>student.sex=='M');
// console.log(fo);


// Reduce: Thismethod is used to accumulate values of an array into a single value
// Usecase: Use reduce when you want to accumulate values of an array into a single result


// const result = array.reduce((accumulator, currentValue, currentIndex, array) => {
//     // callback function logic here
// }, initialValue);

// const arr = [8, 15, 7, 16, 23, 7]
// Logic to fund the biggest value in an array
// const big = arr.reduce((max,value)=>{
//   max = value > max ? value : max;
//   return max;
// }, arr[0])



// console.log(big)


//Cout students by Age
//  const ageGroup = students.reduce((accu, student)=>{
//   if(accu[student.age]){
//     ++accu[student.age];
//   }
//   else {
//     accu[student.age] = 1;
//   }
//   return accu;
// }, {})
// console.log(ageGroup);

// Get name of all students who is less than 15 years of age

//chaining
// const youngsters = students.filter(student => student.age < 15 ).map(student => student.name);
// console.log(youngsters);


// const big = arr.reduce((max,value)=>{
//   max = value > max ? value : max;
//   return max;
// }, arr[0])

// console.log(x)


// const transactions = [
//     { id: 1, product: 'Laptop', category: 'Electronics', amount: 1200, year: 2023 },
//     { id: 2, product: 'Headphones', category: 'Electronics', amount: 80, year: 2024 },
//     { id: 3, product: 'T-shirt', category: 'Apparel', amount: 25, year: 2024 },
//     { id: 4, product: 'Camera', category: 'Electronics', amount: 500, year: 2024 },
// ];

// find the total sales amount for the "Electronics" 
// category over the year 2024.

// const totalElectronicsSales = transactions
//   .filter(transaction => transaction.category === 'Electronics' && transaction.year === 2024)
//   .reduce((total, transaction) => total + transaction.amount, 0);

//   console.log(totalElectronicsSales)




//object destructuring

// const address = {
//   country:"India",
//   state:"Kerala",
//   city:"Trivandrum",
// }

// const country = address.country;
// const state = address.state;
// const city = address.city;
// console.log(state);

// const {country, state} = address;

//  console.log(country);

// const {state:st,...rest} = address;

// console.log(st);
// console.log(rest);

// const printCity = ({country,state})=>{
//     console.log(country);
//     console.log(state)
// }

// printCity(address);

// Nesting and real world usecases

// API response
// const apiResponse = {
//     data: {
//       user: 'Alice',
//       age: 28,
//       preferences: { theme: 'dark', language: 'en' }
//     },
//     status: 200
//   };
  


//  Destructuring the response
//   const { data: { user, age, preferences: { theme, language } }, status } = apiResponse;
//   console.log(user, age, theme, language, status);

//Swapping values
// let a = 5;
// let b = 10;

// [a, b] = [b, a];

// console.log(a, b); 



// The spread operator ...

// Arrays spreading


// const first = [10,20,30,40];
// const second =[50,60,70];
// const com = first.concat(second)

//  console.log(com)

// const combined = [...first,...second]
// const combined1 = [...first, 55, ...second, 110]
// console.log("combined");
// console.log(combined);
// console.log("combined1");
// console.log(combined1);




// //Array copy
// const clone =[...combined];
// console.log("clone");
// console.log(clone);

// Objects spreading

// const obj1 = {name: "Lajin"};
// const obj2 = {job: "SE"};
// const combined = {...obj1,...obj2}
// console.log(combined);

// const merged = {...obj1,...obj2,company:"Techversant"}
// console.log(merged);

//String to array

// const str = 'hello';
// const charArray = [...str];
// console.log(charArray); 


//Object Copy

// const originalObject = {
//     name: 'John',
//     details: {
//       age: 30,
//       city: 'Kottayam',
//     }
// };
  
// const copiedObject = { ...originalObject };
// console.log(copiedObject);


// Spread VS Rest

// rest as function argument

// const greet = (name, ...messages) => {
//     console.log(`Hello, ${name}!`);
//     console.log('Messages:', messages);
// };
  
// greet('Alice', 'How are you?', 'Nice to meet you!');

// spread
//Using spread to pass each element of the array as individual arguments
// console.log(...numbers); 



//classes

// const person = {
//   name: `Lajin`,  
//   breath(){
//     console.log(`breath..`);
//   }
// }

// const person2 = {
//   name: `Sachin`,  
//   breath(){
//     console.log(`breath..`);
//   }
// }

// console.log(person);
// console.log(person2);


// class Person {
//   constructor(name,age){
//     this.name = name;
//     this.age = age;
//   }
//   breath(){
//     console.log(`${this.name} breaths.. at ${this.age}`);
//   }
// }

// const person3 = new Person("Sumesh",34);
// console.log(person3.breath());


// // Inheritance

// class Engineer extends Person{
//   constructor(name,qualification){
//     super(name);
//     //this.name = name;
//     this.qualification = qualification;
//   }
//   sayHello(){
//     console.log(`I'am  ${this.name}, and my qualification is ${this.qualification}!`)
//   }
// }

// const developer = new Engineer("Clara");
// const developer2 = new Engineer("Hari","BTech");

// console.log(developer.sayHello());
// console.log(developer2.sayHello());



/**
 * Matrix class for performing matrix addition.
 */

// class Matrix {

//     constructor(rows,cols) {
//         this.rows = rows;
//         this.cols = cols;
//         this.data = [];
//         // this.data = Array.from({ length: rows }, () => Array(cols).fill(0));
//         for(let i=0;i<rows;i++){
//             this.data[i] = [];
//             for(let j=0;j<cols;j++){
//                 console.log
//                 this.data[i][j] = 0;
//             }
//         }
//     }

//     add(matrix){

//         if(this.rows != matrix.rows || this.cols != matrix.cols){
//                 throw new Error("Matrix order doesn't match for addition!");
//         }
//         let resMatrix = new Matrix(this.rows,this.cols);
//         for(let i=0;i<this.rows;i++){           
//             for(let j=0;j<this.cols;j++){
//                 resMatrix.data[i][j] = this.data[i][j] + matrix.data[i][j];
//             }
//         }
//         return resMatrix;
//     }

//     print() {
//         console.table(this.data)
//     }

// }

//   const matrixA = new Matrix(2, 3);
//   const matrixB = new Matrix(2, 3);
  
// //   Populate matrices with values 

//   matrixA.data = [[1, 2, 3], [4, 5, 6]];
//   matrixB.data = [[7, 8, 9], [10, 11, 12]];

//   let matrixC = matrixA.add(matrixB);
//   matrixC.print();

//Equality in primitives

// if(5=='5')
//     console.log("Equal");
// else
// console.log("Not Equal");

// if(5==='5')
//     console.log("Equal");
// else
// console.log("Not Equal");



//equality in reference types

// const obj1 = { key: 'value' };
// const obj2 = { key: 'value' };

// if(obj1 === obj2 ){
//     console.log("Equal");
// }
// else{
//     console.log("Not Equal");
// }

// console.log(obj1 == obj2)
// if(obj1 == obj2 ){
//     console.log("Equal");
// }
// else{
//     console.log("Not Equal");
// }

/************ Async JavaScript ***************/

//callbacks
//promises
//asynch await
//fetch




// // synchronous calls
// const input = prompt("What is your age?");
// console.log(input);

// //asynchronous call

// const posts = [
//   {title: "Post One", description: "Post One Description"},
//   {title: "Post Two", description: "Post Two Description"},
//   {title: "Post Three", description: "Post Three Description"}
// ];



// function getPosts(){
//   setTimeout(()=>{
//     let output = posts.map((post)=> `<li>${post.title}</li>`);  
//     document.body.innerHTML = output.join('');    
//   },1000);
// }

//getPosts();

// function createPost(post){

//   setTimeout(()=>{
//     posts.push(post);
//    },2000);

// }
// createPost({title:"Post Four",description:"Post Four Description"});
// getPosts();


// console.log(1)

// setTimeout(()=>{
//     console.log(2)
// },0);

// console.log(3);


//callbacks
// function createPost(post,callback){
//   setTimeout(()=>{
//     posts.push(post);
//     callback();
//   },2000);

// }
// createPost({title:"Post Four",description:"Post Four Description"},getPosts);



  

//promises
// provides a cleaner and more structured way to handle asynchronous code compared to 
// traditional callback functions.

//A Promise can be in one of three states:Pending, Fulfilled, Rejected

//  function createPost(post){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       posts.push(post); 
//       const err = false;
//        if(!err) {
//         resolve()
//        }
//        else {
//         reject(`Something went wrong!`);
//        }
//     },2000);
//   })
// }


// createPost({title:"Post Four",description:"Post Four Description"})
// .then(getPosts)
// .catch(err=>console.log(err));


// // promise.all
// const promise1 = Promise.resolve("Hello");
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject)=>
//   setTimeout(resolve, 2000,"GoodBye")
// );




// Promise.all([promise1, promise2, promise3])
//   .then((results) => {
//     console.log("All promises resolved:", results);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// //const promise4 = fetch("https://jsonplaceholder.typicode.com/users");
// const promise4 = fetch("https://jsonplaceholder.typicode.com/users")
//                 .then((res)=>res.json());

// Promise.all([promise1,promise2,promise3,promise4])
// .then(values=>console.log(values));



// fetch("https://jsonplaceholder.typicode.com/posts")
//         .then((res)=>res.json())
//         .then(data => console.log(data))
//         .catch(error => console.error(error));

//callback hell

// asyncFunction1()
//   .then((result1) => {
//     asyncFunction2(result1)
//       .then((result2) => {
//         asyncFunction3(result2)
//           .then((result3) => {
//             // More nested operations...
//           })
//           .catch((error3) => {
//             console.error(error3);
//           });
//       })
//       .catch((error2) => {
//         console.error(error2);
//       });
//   })
//   .catch((error1) => {
//     console.error(error1);
//   });


// async() awaits()

// Feature introduced in ECMAScript 2017 (ES8) 
// Inside an async function, you can use the await keyword before a promise.
// await pauses the execution of the function until the promise is resolved or rejected.


// async function example() {
//     try {
//       const result1 = await asyncFunction1();
//       const result2 = await asyncFunction2(result1);
//       const result3 = await asyncFunction3(result2);
//       // More operations...
//     } catch (error) {
//       console.error(error);
//     }
// }

// async function init(){
//   await createPost({title:"Post Four",description:"Post Four Description"});  
//   getPosts();  
// } 

// init();

// // async using fect

// async function fetchUsers(){
//   const data = await fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json());
//   console.log(data)
// }

// fetchUsers();


// Prototype - allow efficiant sharing of properties and methods amoung objects
// it a mechanism by which objects in JavaScript inherit features from other objects

// const obj = {
//   name: "Sarath",
//   run :() => {
//     console.log(`Hello ${name} from Obj`);
//   }
// }
// console.log(obj);

// const obj2 = {
//   name: "Arun",
//   run2 :() => {
//     console.log(`Hello ${name} from Obj2`);
//   }
//  }

// obj.run();


// //Set the prototype of obj to be obj2
// //obj.__proto__ = obj2;
// Object.setPrototypeOf(obj, obj2);

// obj.run2();

// console.log(obj.name);




//  // Creating a basic object
//  const animal = {
//     makeSound: function () {
//       console.log('Some generic sound');
//     }
//   };
  
//   // Creating an object that inherits from 'animal'
//   const cat = Object.create(animal);
  
//   // Adding a specific property to 'cat'
//   cat.isCute = true;
  
//   // Overriding the 'makeSound' method for 'cat'
//   cat.makeSound = function () {
//     console.log('Meow!');
//   };
  
//   // Creating another object that also inherits from 'animal'
//   const dog = Object.create(animal);
  
//   // Adding a specific property to 'dog'
//   dog.breed = 'Labrador';
  
//   // Using the properties and methods of each object
//   cat.makeSound(); // Outputs: 'Meow!'
//   console.log(cat.isCute); // Outputs: true
  
//   dog.makeSound(); // Outputs: 'Some generic sound'
//   console.log(dog.breed); // Outputs: 'Labrador'
  


// // Creating an object
// const obj = { prop: 'value' };

// // Creating another object to serve as the prototype
// const obj2 = { anotherProp: 'anotherValue' };

// // Setting the prototype of obj to obj2
// obj.__proto__ = obj2;

// // Now, obj inherits properties from obj2
// console.log(obj.anotherProp); 



// A closure is created when a function is defined inside another function, 
// allowing the inner function to access the outer function's variables and 
// parameters even after the outer function has finished execution. 

// function outerFunction() {
//     let outerVariable = 'I am from the outer function';
  
//     function innerFunction() {
//       console.log(outerVariable);
//     }
  
//     return innerFunction;
// }
  
//   // Create a closure by assigning the inner function to a variable
//   const closureVar = outerFunction();
  
//  // Invoke the closure, which still has access to outerVariable
//  closureVar(); 
  

// nullish coalescing operator (??)

// // Function that accepts a name parameter with a default value
// function greetUser(name) {
//     const userName = name || "Guest";
    
//     console.log(`Hello, ${userName}!`);
// }
  
//   // Calling the function with and without a name parameter
//   greetUser("John");    
//   greetUser(0);  
//   greetUser();             
//   greetUser(null);       
//   greetUser(undefined);  



// optional chaning ?.

// Sample object with nested properties
// const user = {
//     id: 1,
//     name: 'John',
//     address: {
//       street: '123 Main St',
//       city: 'Exampleville',
//       zipCode: '12345'
//     },
//     contacts: {
//       email: 'john@example.com',
//       phone: {
//         //mobile: ['555-1234'],
//         home: '555-5678'
//       }
//     }
//   };
  
//   const zipCode = user.address.zipCode;  
//   const homePhone = user.contacts.phone.home;  

//   // Using optional chaining to access nested properties
//   const zipCode = user?.address?.zipCode;  
//   const homePhone = user?.contacts?.phone?.home;  
  
//   console.log('Zip Code:', zipCode); 
//   console.log('Home Phone:', homePhone);  

//   console.log(user && user.contacts && user.contacts.phone && user.contacts.phone.home)
   
//   console.log(user && user.contacts && user.contacts.phone && user.contacts.phone.mobile?.[0])

//user.print?.()

// adding css to console.log

// console.log(`%c Hello world!`, 
//     "color:red; background-color:yellow"
//     );

// console.log(`%c key: %c value`, 
//     "font-weight:boldw",
//     "color:green"
//     );

// key and name variable
// {

// const name = "Lajin";
// const sex = "Male";
// const Person = {
//     name: name,
//     sex:sex
// }
// const Person2 = {
//     name,
//     sex
// }
// console.log(Person)
// console.log(Person2)

// }

//scope and {}

// {
//     const x = 10;
//     console.log(x)
// }
// const x=20;
// console.log(x)

//this is very useful in switch cases


//defer attribute




//checking is a property is defined

// const Person = {
//     name:"The Name",
//     sex:'Male'
// }

// // delete Person.name
// if("name" in Person)
//     console.log("Name is defined!")
// else
//     console.log("Name is not defined!")

//console.log(window)

    // imports and exports