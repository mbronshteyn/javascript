// Functional Programming for Beginners Excercise

// create the code to go from studentGrades array,
// to studentFeedback (as shown in comments below)

const R = require('ramda');

const studentGrades = [
  {name: 'Joe', grade: 88},
  {name: 'Jen', grade: 94},
  {name: 'Steph', grade: 77},
  {name: 'Allen', grade: 60},
  {name: 'Gina', grade: 54},
];

const studentFeedback = studentGrades.map(studentGrade => {
  return studentFeedbackProcess(studentGrade.grade)(studentGrade.name);
});

console.log(studentFeedback);

function studentFeedbackProcess(grade) {
  if (90 <= grade) {
     return ( name ) => `Excellent Job ${name}, you got an a`;
  }
  else if( 80 <= grade && grade < 90 ){
     return ( name ) => `Nice Job ${name}, you got a b` ;
  }
  else if( 70 <= grade && grade <= 80){
     return ( name ) => `Well done ${name}, you got a c`;
  }
  else if( 60 <= grade && grade <= 70 ){
     return ( name ) => `What happened ${name}, you got a d`;
  }
  // anything below 60 is an F
  else {
     return ( name ) => `Not good ${name}, you got an f`;
  }
}

// tripleAdd( 10 )( 20 )( 30 );

const tripleAdd = ( num1 ) => {
  return ( num2 ) => {
    return ( num3 ) => {
      return num1 + num2 + num3;
    }
  }
};

const msg = R.curry( ( msg, name ) => `${msg} ${name}`);

const morningGreet = msg( 'Good Morning,');

// two parameters
console.log( msg( 'Hello World, ', 'Mike'));

// calling curried function with only one parameter
console.log( morningGreet( 'Mike'));

console.log( tripleAdd( 10 )(20 )(30 ) );


/*
const studentFeedback = [
  'Nice Job Joe, you got an b',
  'Excellent Job Jen, you got an a',
  'Well done Steph, you got an c',
  'What happened Allen, you got an d',
  'Not good Gina, you got an f',
];
*/

let a = {};
a.b = 'Hello World!!!';
a = { ...a, d: 'Another way to add member to object' };

console.log( 'a.b, a.d', a.b, a.d );

