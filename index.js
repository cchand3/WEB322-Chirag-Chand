console.log('Hello World');

// to create custom event emitters
const EventEmitter = require('events');

// creating a custom event emitter
const trafficLightEmitter = new EventEmitter();

// defining the traffic light colors
const colors = ['Red', 'Yellow', 'Green'];

// to keep track of the colors
let currentIndex = 0;

// main function
function changeColor() {
  const currentColor = colors[currentIndex];
  console.log(currentColor);
  
  trafficLightEmitter.emit('colorChange', currentColor);

  currentIndex = (currentIndex + 1) % colors.length;

  const delay = currentColor === 'Red' ? 5000 : currentColor === 'Yellow' ? 2000 : 5000;
  setTimeout(changeColor, delay);
}
// calling it to initialize the traffic light simulation
changeColor();

// event listener for the 'colorChange' event
trafficLightEmitter.on('colorChange', (currentColor) => {
  console.log('The light just changed to', currentColor);
});