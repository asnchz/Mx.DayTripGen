"use strict"
/*
// random destination
    // Guadalajara, Cancun, Mexico City, Cabo San Lucas
// restaurant
    // Tacos, Steak House, Seafood, Pizza
// mode of transportation
    // Uber, Bus, Car Rental, Bike
// form of entertainment
    // Water Park, Museum, Club, Concert
// give user option to change any of the above
// display completed trip in console

*/

let locations = ["Guadalajara", "Cancun", "Mexico City", "Cabo San Lucas"];

function mexicoDestination(cityOne, cityTwo){
    let pasoUno = cityTwo - cityOne + 1;
    let pasoDos = Math.random() * pasoUno;
    let result = Math.floor(pasoDos) + cityOne;
    return result;
}
let randLocation = mexicoDestination(0, locations.length-1);
    let result = locations[randLocation];
console.log('Your vacation destination is ' + result + '!');

let restaurant = ['Pepes Tacos', 'La Parilla Steak & Beer', 'El Pescadito Seafood', 'Pizzeria Italiana'];

function destinationEats(eatOne, eatTwo){
    let hungryOne = eatTwo - eatOne + 1;
    let hungryTwo = Math.random() * hungryOne;
    let resultado = Math.floor(hungryTwo) + eatOne;
    return resultado;
}
let randEats = destinationEats(0, restaurant.length-1);
    let resultado = restaurant[randEats];
console.log(resultado + ' for lunch today!');

let transportation = ['uber', 'bus', 'car rental', 'bike'];

function transport(fast, furious){
    let carro = furious - fast + 1;
    let carroDos = Math.random() * carro;
    let toFast = Math.floor(carroDos) + fast;
    return toFast;
}
let randTransport = transport(0, transportation.length-1);
    let toFast = transportation[randTransport];
console.log(`Your ${toFast} is waiting outside`);

let entertainment = ['water Park', 'museum', 'club', 'concert'];

function stuffToDo(funOne, funTwo){
    let stuffOne = funTwo - funOne + 1;
    let stuffTwo = Math.random() * stuffOne;
    let funStuff = Math.floor(stuffTwo) + funOne;
    return funStuff;
}
let randEntertain = stuffToDo(0, entertainment.length-1);
    let funStuff = entertainment[randEntertain];
console.log('For todays adventure you will be going to the ' + funStuff + '!');

let finalGen = prompt (`${result} awaits for you! Today you'll be eating at ${resultado} before heading to the ${funStuff}. Your ${toFast} is on its way! 
Are you happy with your trip? yes or no.`);

function randGenerator(array){
    let i = Math.floor(Math.random()*4);
    return array[i]
}
let place = randGenerator(locations);
let food = randGenerator(restaurant);
let ride = randGenerator(transportation);
let fun = randGenerator(entertainment);

let answerOne;
let i = 0;
if(finalGen == "yes"){
    answerOne = alert("HAVE FUN!!")
} 
else
    answerOne = prompt("Which are you not up for? Location, restaurant, transportation or entertainmet?");

if(answerOne == "location"){
    console.log(`Your new destination is ${place}!`);
} else if(answerOne == "restaurant"){
    console.log(`Your new restaurant is ${food}!` );
} else if(answerOne == "transportation"){
    console.log(`Your new ride is ${ride}!`);
} else if(answerOne == "entertainment"){
    console.log(`Your new entertainment is ${fun}!`);
}
else console.log(`${result} awaits for you! Today you'll be eating at ${resultado} before heading to the ${funStuff}. Your ${toFast} is on its way! 
`);
let newGen = prompt("Type yes to confirm trip")
if(newGen == "yes"){
console.log(`Cool! Your new trip is to ${result}, you'll be eating at ${resultado} before heading to the ${funStuff}. Your ${toFast} is on its way!`);
}
