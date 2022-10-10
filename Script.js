
const cars = ["BMW", "Volvo", "Mini","Toyota"];
var colors = ["red", "blue", "green","purple"]
let pizzaTopping = ["Olives","sausage","onion"]


let text = "";
for (let x of cars) {
  text += x;
  console.log(x)
}
console.log(text)






for (let i = 0; i < colors.length; i++ ){

  console.log(colors[i])
}

function colorsWrite(){
  var colors
  console.log(colors)
}

for (let i = 0; i < 101; i++ ){
  //console.log(i)
}

function myFunction() {
  let carName = "Volkswagen"
  console.log(carName)
  myFunction()
}



var newVariable = function() {
for (let i = 0; i < pizzaTopping.length; i++)
document.writeln(pizzaTopping[i])
console.log(pizzaTopping)
}

newVariable()

const nickAge = 18;

if(nickAge < 18) {
  console.log("Nick is an adult");

} else {
  console.log("Nick is a child")
}

function getAge(isAdult) {
return(isAdult > 18 ? '18' : '12')
}


const aliceAge = 20
console.log(getAge(aliceAge));
if (aliceAge < 18) {
  console.log("Alice is under 18 years old.");
} else if (aliceAge > 18) {
  console.log ("Alice is over 18 years old.")
} 

function getFee(isMember) {
  return (isMember ? '$2.00' : '$10.00');
}

console.log(getFee(true));
// expected output: "$2.00"

console.log(getFee(false));
// expected output: "$10.00"

console.log(getFee(null));
// expected output: "$10.00"




const box = document.createElement("div")

box.id ="box"

document.body.appendChild(box);

const button = document.createElement('button');

button.innerText = 'Button';

button.id = 'button-1'

box.appendChild(button);

var colors = ["red", "blue", "green"]

button.addEventListener("click",newVariable)

