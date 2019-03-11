let name = 'global';


let obj1 = {
  name: 'obj1',
  fun1 : function(){
    console.log( this)
    console.log( this.name )
  }
};

obj1.fun1();

let obj2 = {
  name: 'obj2',
  fun2: obj1.fun1
}

obj2.fun2();

let fun3 = function(){
  console.log( this)
  console.log( this.name )
}

fun3();

console.log( '=======================================')

let obj3 = {
  name: 'obj3',
  fun3 : fun3
}

obj3.fun3();


console.log( '=======================================')
for( prop in obj1 ){
  console.log( obj1[prop] );
}
