//math operations in js

let radius = 10;
const pi = 3.14;

//Addition 
console.log(10 + 5);

//Subtraction
console.log(10-5);

//Multiplication
let result = pi * radius**2; //area of circle
console.log(result);

//BODMAS - Bracket, Order, Division, Multiplication, Addition, Subtraction

let final = 5 * (radius + 5) ** 2;
console.log(final);

//Increment and Decrement 

let likes = 10;
likes++; 
console.log(likes);

likes--;
console.log(likes);

likes += 10; //likes = likes + 10
console.log(likes);

likes -= 5;
console.log(likes);

likes *= 2;
console.log(likes);

//concatenate string and number 
let result2 = "The blog has " + likes + " likes.";
console.log(result2);

//NaN - Not a number
console.log("ISHWARI" / 2);

//template string - using backticks

const title = "Best reads of 2025";
const author = "Ishwari";
const likes2 = 30;

let result3 = `The blog called ${title} by ${author} has ${likes2} likes.`;
console.log(result3);

//create html template using template string

let html = `
<h2> ${title} </h2>
<p>By ${author} </p>
<span> This blog has ${likes2} likes </span>
`;

console.log(html);


