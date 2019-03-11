
document.getElementById( 'button1' )
  .addEventListener( 'click', getText );

document.getElementById( 'button2' )
  .addEventListener( 'click', getJson );

document.getElementById( 'button3' )
  .addEventListener( 'click', getData );

function getText(){

  fetch( 'test.txt')
    .then( function (res ) {
      return res.text();
    })
    .then( function( res ){
      console.log( res );
      document.getElementById( 'output').innerHTML = res;
    })
    .catch(err => {
      console.log( err );
    });
}

function getJson() {

  fetch('posts.json')
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      console.log(res);
      document.getElementById('output').innerHTML = JSON.stringify(res);
    })
    .catch(err => {
      console.log(err);
    });
}

function getData() {

  fetch('https://api.github.com/users')
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      console.log(res);
      document.getElementById('output').innerHTML = JSON.stringify(res);
    })
    .catch(err => {
      console.log(err);
    });
}

