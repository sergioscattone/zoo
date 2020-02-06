"use strict";
exports.__esModule = true;
var Lion_1 = require("./classes/Lion");
var Tiger_1 = require("./classes/Tiger");
var Bird_1 = require("./classes/Bird");
var Fish_1 = require("./classes/Fish");
console.log('--- Welcome to the ZOO ---');
console.log('A Lion, a Tiger, a Bird and a Fish will speak the same spech.');
var speach = "Rotunda Software Rules !!!";
console.log("Which is: " + speach);
console.log('');
// Lion
var lionSimba = new Lion_1["default"]('simba');
var lionSpeach = lionSimba.speak(speach);
console.log("--- THE LION (" + lionSimba.getName() + ") ---");
console.log(lionSpeach);
console.log('');
// Tiger
var tigreTony = new Tiger_1["default"]('Tony');
var tigreSpeach = tigreTony.speak(speach);
console.log("--- THE TIGER (" + tigreTony.getName() + ") ---");
console.log(tigreSpeach);
console.log('');
// Bird
var birdTweety = new Bird_1["default"]('Tweety');
var birdSpeach = birdTweety.speak(speach);
console.log("--- THE BIRD (" + birdTweety.getName() + ") ---");
console.log(birdSpeach);
console.log('');
// Fish
var fishMooney = new Fish_1["default"]('Mooney');
var fishSpeach = fishMooney.speak(speach);
console.log("--- THE FISH (" + fishMooney.getName() + ") ---");
console.log(fishSpeach);
console.log('');
