import Lion from './classes/Lion';
import Tiger from './classes/Tiger';
import Bird from './classes/Bird';
import Fish from './classes/Fish';

console.log('--- Welcome to the ZOO ---');
console.log('A Lion, a Tiger, a Bird and a Fish will speak the same spech.');
const speach = "Rotunda Software Rules !!!";
console.log(`Which is: ${speach}`);
console.log('');

// Lion
const lionSimba = new Lion('simba');
const lionSpeach = lionSimba.speak(speach);
console.log(`--- THE LION (${lionSimba.getName()}) ---`);
console.log(lionSpeach);
console.log('');

// Tiger
const tigreTony = new Tiger('Tony');
const tigreSpeach = tigreTony.speak(speach);
console.log(`--- THE TIGER (${tigreTony.getName()}) ---`);
console.log(tigreSpeach);
console.log('');

// Bird
const birdTweety = new Bird('Tweety');
const birdSpeach = birdTweety.speak(speach);
console.log(`--- THE BIRD (${birdTweety.getName()}) ---`);
console.log(birdSpeach);
console.log('');

// Fish
const fishMooney = new Fish('Mooney');
const fishSpeach = fishMooney.speak(speach);
console.log(`--- THE FISH (${fishMooney.getName()}) ---`);
console.log(fishSpeach);
console.log('');