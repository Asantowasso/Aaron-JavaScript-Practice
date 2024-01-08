
//Test

fetch(
"https://api.artic.edu/api/v1/artworks"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (obj) {
  
        console.log(obj.data[0].artist_title);
        console.log(obj);
      })
    



// MET API

// var req1 = "468379";
// var req2 = "323912"
// var req3 = "56766";

// const reqs = [req1, req2, req3];

// for (let i = 0; i < reqs.length; i++) {
//   console.log(reqs[i]);
//   fetch(
//     "https://collectionapi.metmuseum.org/public/collection/v1/objects/" +
//       reqs[i]
//   )
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (obj) {

//       console.log(obj);
//       console.log(obj.objectID)
//       console.log(obj.title)
//       console.log(obj.title)
 

// var name1 = obj.title;
// document.querySelector(".section1").innerHTML = name1;

// var name2 = obj.title;
// document.querySelector(".section2").innerHTML = name2;

// })
// }












// var fruits = ["mango", "bananna", "apple", "Tomato"]


// for (var i=0; i<fruits.length; i++) {
// console.log(fruits[i])


// }



// var exhibitArray = []


// fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (obj) {
//     console.log(obj);
//   })


// function countDownRecursive(n) {
//   if (n <= 0) {
//     console.log('Hooray')
//     return
//   }
//   console.log(n)
//   countDownRecursive(n-1)
// }




// const myObject = {
//   city: "Madrid",
//   greet() {
//     console.log(`Greetings from ${this.city}`);
//   },
// };

// myObject.greet(); // Greetings from Madrid

// // recursion is when a fucntion is called within itself
// const loop = ()=> {
//   if (n < 0) return;
//   console.log("hey")
//   loop(n - 1)
// };

// loop(9)



// for (var pea=10; pea<=15; pea++) {
//   console.log(pea)
// }


// var total = 0

// for(var num = 1; num < 11; num++) {
//   total = total + num;
// }

// console.log("the total is: " + total)



// var data = {
//   name: "John",
//   age: 28,
//   maritalStatus: true
// }

// console.log(data["maritalStatus"])

// for (var elem in data){
//   console.log(elem, data[elem]);
// }


//Object.keys method

// const user = {
//   name: "Aaron",
//   age: 28,
//   Status: "busy"
// };

// for (const key of Object.keys(user)) {
//   console.log(`${key} => ${user[key]}`);
// }
// var pizza = 'Deep Dish'
// console.log(pizza)



// const cars = ["BMW", "Volvo", "Mini","Toyota"];
// var colors = ["red", "blue", "green","purple"]
// let pizzaTopping = ["Olives","sausage","onion"]


// let text = "";
// for (let x of cars) {
//   text += x;
//   console.log(x)
// }
// console.log(text)






// for (let i = 0; i < colors.length; i++ ){

//   console.log(colors[i])
// }

// function colorsWrite(){
//   var colors
//   console.log(colors)
// }

// for (let i = 0; i < 101; i++ ){
//   //console.log(i)
// }

// function myFunction() {
//   let carName = "Volkswagen"
//   console.log(carName)
//   myFunction()
// }



// var newVariable = function() {
// for (let i = 0; i < pizzaTopping.length; i++)
// document.writeln(pizzaTopping[i])
// console.log(pizzaTopping)
// }

// newVariable()

// const nickAge = 18;

// if(nickAge < 18) {
//   console.log("Nick is an adult");

// } else {
//   console.log("Nick is a child")
// }

// function getAge(isAdult) {
// return(isAdult > 18 ? '18' : '12')
// }


// const aliceAge = 20
// console.log(getAge(aliceAge));
// if (aliceAge < 18) {
//   console.log("Alice is under 18 years old.");
// } else if (aliceAge > 18) {
//   console.log ("Alice is over 18 years old.")
// } 

// function getFee(isMember) {
//   return (isMember ? '$2.00' : '$10.00');
// }

// console.log(getFee(true));
// // expected output: "$2.00"

// console.log(getFee(false));
// // expected output: "$10.00"

// console.log(getFee(null));
// // expected output: "$10.00"




// const box = document.createElement("div")

// box.id ="box"

// document.body.appendChild(box);

// const button = document.createElement('button');

// button.innerText = 'Button';

// button.id = 'button-1'

// box.appendChild(button);

// var colors = ["red", "blue", "green"]

// button.addEventListener("click",newVariable)
  
