
document.querySelector( '.get-jokes').addEventListener( 'click', getJokes );

function getJokes( e ){

  const number = document.querySelector('input[ type = "number"').value;

  const xhr = new XMLHttpRequest();

  xhr.open( 'GET', `http://api.icndb.com/jokes/random/${number}`, true );

  xhr.onload = function(){
    if( this.status === 200 ){
      const response = JSON.parse( this.responseText );

      let jokes = document.getElementById( 'jokes' );

      response.value.forEach( _joke => {
        const li = document.createElement( 'li' );
        li.innerText = unescape( _joke.joke );
        jokes.appendChild( li );
      });
    }
  }

  xhr.send();

  e.preventDefault();
}
