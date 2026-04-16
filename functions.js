alert("Hello! Welcome to functions in Javascript!");

function greet() //function declaration
{
   console.log("Hello, SSUP???");
}

greet(); //function call

const speak = function() //Function expression
{
   console.log("Good day!");
};

greet();
speak();
speak();

//Note : Function declaration is hoisted, which means you can call the function before it is defined in the code. 
// On the other hand, function expressions are not hoisted, so you must define the function before calling it.

const hello = function(name)
{
   console.log(`Hello, ${name}!`);
};

hello("Ishwari");

const result = function(name = 'there', time = 'day')  //default parameters
{
   console.log(`Good ${time}, ${name}!`);
};

result("Ishwari", "evening"); //Output: Good evening, Ishwari!

const calcArea = function(radius)
{
   let area = 3.14 * radius**2;
   return area; //return statement is used to return a value from the function. Can be used to global variable as well.
}

const area = calcArea(5);
console.log(area); //Output: 78.5

//arrow function

const add = (num1, num2) => 
{
   return num1 + num2;
};

const final_result = add(5,8);
console.log(final_result); //Output : 13

//Simple billing calculator using functions

const bill = function(products, tax)
{
   total = 0;
   for(let i = 0; i < products.length; i++)
   {
      total = total + products[i] + products[i] * tax;
   }
   return total;
}
console.log(bill([10, 15, 10], 0.2)); //Output: 42