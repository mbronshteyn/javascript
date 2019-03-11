const http = new easyhttp2;

// http.get( 'https://jsonplaceholder.typicode.com/posts',
//   function( error, response ){
//     if( error ){
//       console.log( error );
//     } else {
//       console.log( response );
//     }
//   });

// Create data
const data = {
  title: 'Custom Post',
  body: 'This is custom post updated'
};

//
// http.post( 'https://jsonplaceholder.typicode.com/posts',
//     data, function( error, response ){
//     if( error ){
//       console.log( error );
//     } else {
//       console.log( response );
//     }
//   });

// http.put( 'https://jsonplaceholder.typicode.com/posts/1',
//     data, function( error, response ){
//     if( error ){
//       console.log( error );
//     } else {
//       console.log( response );
//     }
//   });

http.delete( 'https://jsonplaceholder.typicode.com/posts/1',
  function( error, response ){
    if( error ){
      console.log( error );
    } else {
      console.log( response );
    }
  });

