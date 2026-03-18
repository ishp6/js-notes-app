alert("Welcome to lecture of arrays in js");

let ninjas = ["Naruto", "Sasuke", "Sakura"];
console.log(ninjas);

console.log(ninjas[1]);

ninjas[2] = "Itachi";
console.log(ninjas);

let ages = [17, 18, 19];
console.log(ages);

//Arrays can hold different data types
let random = ["Ishwari", "Pooja", 17, 18, true];
console.log(random);

console.log(random.length); //Length of array

//Array methods 
let result = ninjas.join(","); //joins all the elements of array into a string
console.log(result);

let result2 = ninjas.indexOf("Itachi"); //gives the index of element in array
console.log(result2);

let result3 = ninjas.concat(["Kakashi", "Shikamaru", "Sakura", "Obito"]);
console.log(result3);

let result_final = ninjas.push("Minato");
console.log(result_final);
console.log(ninjas);

let result4 = ninjas.pop(); //removes last element of array
console.log(result4);
console.log(ninjas);

//boolean 

let email = "ishwari6666@gmail.com";

let end_result = email.includes("@"); //checks if the string contains '@' or not
console.log(end_result);

let names = ["Ishwari", "Pooja", "Nanda"];
let outcome = names.includes("Pooja"); 
console.log(outcome);

//loose comparison 

let age = 18;

console.log(age == 18); //true
console.log(age == "18"); //true

//strict comparison 

console.log(age === 18); //true
console.log(age === "18"); //false

//type conversion 

let score = "100";

console.log(score + 1); //1001

let final_score = Number(score); //converts string to number
console.log(final_score + 1); //101

console.log(typeof score); //string
console.log(typeof final_score); //number 