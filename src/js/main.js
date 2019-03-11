


(
  a => { a.a(); }
)((function test( ...nums ){

  let sum = 0;
  nums.map( num => {
    sum += num;
  });


  (() => console.log( `Sum:  ${sum}` ))();

  return (
    {
      a: () => {
        console.log( `hello from a, sum is ${sum}`);
      }
    }
  );
})( 1,2,3,4,5,6 ));


( obj => {
  return () => console.log( obj.string.toUpperCase() );
})({ string: 'es6 rocks' })();

const aaa = {};
aaa.a = 2;
aaa.b = 3;

let { a, b } = aaa;

console.log( a, b );



