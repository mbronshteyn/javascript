// Count how many digits there are in the following
// sentence, using functional composition

// NOTE: If you get stuck, you can get some hints from
// the following jsbin:
// https://jsbin.com/jokefus/2/edit?js,console
// my solution is here: https://jsbin.com/duxewec/1/edit?js,console
const expect = require('chai').expect;
const R = require('ramda');

const sentence = 'PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).';

// curry function to split by each letter
const splitEachLetter = R.split( '' );
// filter only numbers from array
const filterNumbers = ( arr ) => arr.filter( num => {
  return num >= '0' && num < '9';
});

// add function composition here
const numbersInString = R.compose( R.length, filterNumbers, splitEachLetter );

try {
  expect( numbersInString( sentence )).to.eql( 7 );
} catch( e ){
  console.log( e );
}

console.log('If you see this printed in the console, the test passed!');
