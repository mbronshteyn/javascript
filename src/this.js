let foo = function () { console.log('default function'); }
let bar = function() { console.log( 'bar')};

function pickAFunction( y ) {
  var funcs = {
    a: function () {
      console.log('a');
    },
    b: function () {
      console.log('b');
    },
    printSomething : function(){
      console.log( 'print something');
    }

  };
  foo = funcs[ y ];
  bar = funcs[ y ];
}

foo();
pickAFunction('a');
foo();
pickAFunction('b');
foo();
pickAFunction('printSomething');
bar();

let logme;
let obj = {
  logme: function ( msg ) {
    console.log( msg );
  },
  a:  2
}['logme']('hello immediate');

logme = obj['logme'];
logme( 'another log');






