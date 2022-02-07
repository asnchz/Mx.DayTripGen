"use strict";
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
let restaurants = ['Pepes Tacos', 'La Parilla Steak & Beer', 'El Pescadito Seafood', 'Pizzeria Italiana'];
let transportation = ["uber", "bus", "car rental", "bike"];
let entertainment = ["water Park", "museum", "club", "concert"];

function randGenerator(array) {
  let i = Math.floor(Math.random() * array.length);
  return array[i];
}
let destination = randGenerator(locations);
let restaurant = randGenerator(restaurants);
let comute = randGenerator(transportation);
let activity = randGenerator(entertainment);

function selection() {
  let tripApproved = false;
  while (tripApproved === false) {
    let userInput =
      prompt(`${destination} awaits for you! Today you'll be eating at ${restaurant} before heading to the ${activity}. Your ${comute} is on its way! 
        Are you happy with your trip? yes or no`);

    if (userInput === "yes") {
      tripApproved = true;
      console.log(
        `${destination} awaits for you! Today you'll be eating at ${restaurant} before heading to the ${activity}. Your ${comute} is on its way!`
      );
    } else {
      destination = randGenerator(locations);
      restaurant = randGenerator(restaurants);
      comute = randGenerator(transportation);
      activity = randGenerator(entertainment);
    }
  }
}
selection();
