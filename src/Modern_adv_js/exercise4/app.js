
const EXER4 = {};


( function( namespace ){

  let cnt = 0;

  let logo = document.getElementById( 'logo' );

  logo.addEventListener( 'click', function( e ){
      //Add a click handler to the javascript logo. The first time it is clicked after the page loads, display to the console: "You have clicked this logo for the first time."
      if( cnt === 0 ){
        console.log( 'You have clicked this logo for the first time.' );
      } else {
      //The second and subsequent clicks, display "You have clicked the logo again."
        console.log( 'You have clicked the logo again.');
      }
      cnt++;

    e.preventDefault();
  });

//Create this without using any global variables.

})( EXER4 );


