

// Create a function that adds two numbers and assigns it to a variable by returning the sum.
let y = ( ( a, b  ) => {
  return a + b;
}) ( 2, 3 );

console.log( '#1', y );

// Create a function that multiplies the results of the previous function by itself and stores product in a second variable.
let k = ( y => y * y )(( ( a, b  ) => {
  return a + b;
}) ( 2, 3 ));

console.log( '#2', k );

//  Create a function that prints to the console the variable that contains the results of the second function you created.
( msg => console.log( '#3', msg ))(
  ( y => y * y )(
    ( ( a, b  ) => { return a + b; }
    )( 2, 3 )
  )
);


