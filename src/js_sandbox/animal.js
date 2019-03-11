
let sum = function( x, y ){
  return x+y;
}

console.log( sum( 2, 3 ));

let a = sum;

let run = function (a, param1, param2 ) {
  return a( param1, param2 );
}

a.name = 'Mike';

console.log( run( a, 3, 5, ));


console.log( a.name );

console.log( run( ( a, b ) => {
  return a*b;
}, 2, 3 ));

