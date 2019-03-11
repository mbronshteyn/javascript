const http = new EasyHttp();

// http.get( 'https://jsonplaceholder.typicode.com/posts',
//   function( error, response ){
//     if( error ){
//       console.log( error );
//     } else {
//       console.log( response );
//     }
//   });

http.get( 'https://jsonplaceholder.typicode.com/users' )
  .then( res => console.log( res ))
  .catch( err => console.error( err ));

// Create data
const data = {
  title: 'Custom Post',
  body: 'This is custom post updated'
};

// http.post('https://jsonplaceholder.typicode.com/posts', data )
//   .then( res => console.log( `id = ${res.id} : ${res.body}` ))
//   .catch( err => console.log( err ));

// http.put('https://jsonplaceholder.typicode.com/posts/1', data )
//   .then( res => console.log( `id = ${res.id} : ${res.body}` ))
//   .catch( err => console.log( err ));

// http.delete('https://jsonplaceholder.typicode.com/posts/1', data )
//   .then( res => console.log( res ))
//   .catch( err => console.log( err ));

// http.put( 'https://jsonplaceholder.typicode.com/posts/1',
//     data, function( error, response ){
//     if( error ){
//       console.log( error );
//     } else {
//       console.log( response );
//     }
//   });

// http.delete( 'https://jsonplaceholder.typicode.com/posts/1',
//   function( error, response ){
//     if( error ){
//       console.log( error );
//     } else {
//       console.log( response );
//     }
//   });

