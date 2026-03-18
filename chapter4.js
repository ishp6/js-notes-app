alert("Welcome to lecture of control statements and loops in js");

let names = ["Ishwari", "Pooja", "Nanda"];
for(let i = 0; i < names.length; i++)
{
    let names = ["Ishwari", "Pooja", "Nanda"];
    console.log(names[i]);

    // let html = `<div>${names[i]}</div>`;
    // console.log(html);
}

//while loop

let ninjas = ["Naruto", "Sasuke", "Sakura"];

let i = 0;
while(i < ninjas.length)
{
    console.log(ninjas[i]);
    i++;
}

//if 

let age = 18;

if(age > 15)
{
    console.log("lol...you are just a kid. pls dont act like a big G.")
}

//if-else 

let password = "password@234";

if(password.length >= 12 && password.includes("@"))
{
    console.log("Damn..trying to protect something important, huh? That's a strong password.");
}
else if(password.length >=8 && password.includes("@"))
{
    console.log("Dude suggesting you to make it more stronger. Add some characters.");
}
else 
{
    console.log("What you even tryna protect with this weak ass password? Change it asap.");
}

let scores = [10, 20, 50, 0, 100, 200, 6];

for(let i = 0; i < scores.length; i++)
{
    console.log("Your score is : " + scores[i]);

    if(scores[i] === 0)
    {
        continue;
    }


  if(scores[i] == 200)
  {
    console.log("Congrats you achieved the highest score");
    break; 
  }
}

//switch statement

const grade = 'C';

switch(grade)
{
  case 'A':
    console.log("Excellent! You got an A.");
    break;
  case 'B':
    console.log("Good job! You got a B.");
    break;
  case 'C':
    console.log("Try hard. You got a C.");
    break;
  case 'D':
    console.log("You have to work hard. You got a D.");
    break;
  default:
    console.log("Invalid grade.");
}