//
// let obj = {
//   firstName: 'John',
//   lastName: 'Doe',
//   fullName:  ( firstName, lastName ) => {
//     console.log( firstName + " " + lastName);
//   }
// }
//
// obj.fullName( obj.firstName, obj.lastName );
//
//
//
//
// const meal = {
//   id: 1,
//   food: 'breakfast',
// }
//
// console.log( 'meal', meal );
//
// const updateMeal = {
//   ...meal
// }
//
// console.log( 'updated meal', updateMeal );
//
//
// const doubleArray = [1, 2, 3 ]
//   .filter( _i => _i != 2 )
//   .map( ( _i ) => {
//     return 2*_i;
//   });
//
// const updatedArray = [ ...doubleArray, 2 ].sort();
//
// console.log( updatedArray );
//
// let arrObj = [];
// arrObj = [ ...arrObj, 3, 4, 5 ];
// console.log( arrObj.length );

let c = {};

c.a = 1;
c.b = 2;
c.c = 3;

let cc = Object.keys(c).map( field => {
  return field.toLocaleUpperCase();
});

console.log( cc );

let response = (() => {
  return {
    color: 'white'
  }
})()

console.log( response );


const car = {
  brand: 'Ford',
  model: 'Fiesta',
  start: function() {
    console.log(`Started ${this.brand} ${this.model}`)
  },
  stop: () => {
    console.log(`Stopped ${this.brand} ${this.model}`)
  }
}

car.start();
car.stop();

let x = (
  () => {
    return 2 + 3;
  }
)();

console.log( 'result: ', x );


const passArray = function(...args: any[] ){

  console.log( args );
}

passArray( props => [ 1, 2, 3   ]);







