alert("Hello, world!");
console.log("Hi there!");
console.log("Welcome to Javascript.");

let age = 22;
console.log(age);

let year = 2026;
console.log(age, year);

age = 30;
year = 2034;
console.log(age, year);

const birthYear = 2003;
console.log(birthYear);

// birthYear = 2000;
// console.log(birthYear);

//Strings 

console.log("Strings are used for storing text. They are wrapped in single/double quotes.");

// let email = "ishwari123@gmail.com";
// console.log(email);

//String concatenation 
let firstName = "Ishwari";
let lastName = "Patil";

let fullName = firstName + " " + lastName;
console.log(fullName);

//String character access
console.log(fullName[0]);
console.log(fullName[1]);

//String length
console.log(fullName.length); //property 

//String methods 
console.log(fullName.toUpperCase());

let result = fullName.toLowerCase();
console.log(result, fullName);

let email = "ishwari122@gmail.com";
let index = email.indexOf("w");
console.log(index);

// let email = "ishwari122@gmail.com";
let result_email = email.lastIndexOf("i");
console.log(result_email);

let result_slice = email.slice(0, 7);
console.log(result_slice);

let result_substring = email.substring(0, 7);
console.log(result_substring);

let result_replace = email.replace("i", "n");
console.log(result_replace, email);




