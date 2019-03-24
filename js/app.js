console.log("Welcome to my website and the dev tools!");
//console.log("Press enter to find out more information");

let name = '';

console.log("Welcome to my website and the dev tools!");

console.log("Please enter 'userName()'");


function userName() {
  name = prompt("Please enter your name");
  console.log("Hi " + name); 
  console.log("Please enter 'banner()'");
  return name;
} 

function banner() {
  document.querySelector("h1").innerText = name;
  console.log("Please enter wordGame();")
}

function wordGame() {
  let words = document.querySelector(".header_intro");
  noun = prompt("Please enter a noun");
  verb = prompt("Please enter a verb");
  adj = prompt("Please enter an adjective");
  words.innerText ="Hi, I'm " + name + ", I'm a Front End Developer and I " + verb + " to make " + adj + " " + noun;
}
