
// const name = 'Mike';
//
// async function myFunc(){
//
//   const promise = new Promise(( resolve, reject ) => {
//     setTimeout( () => resolve( `Hello ${name}`), 1000 );
//   })
//
//   const res = await promise;
//   return res;
//
// }
//
// myFunc().then( res => console.log( res ));

async function getUsers(){
  const response = await fetch( 'https://jsonplaceholder.typicode.com/users' );

  const data = await response.json();

  return data;
}

getUsers().then( users => {
  // users.forEach(( user ) => {
  //   console.log( `Name: ${user.name}, email: ${user.email}`);
  // })

});
