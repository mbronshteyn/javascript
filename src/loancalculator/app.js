
document.getElementById( 'loan-form' ).addEventListener( 'submit',
  function ( e ) {

  // Hide Results
  document.getElementById('results').style.display = 'none';

  // Show loader
  document.getElementById('loading').style.display = 'block';

  setTimeout( calculateResults, 1500 );

  e.preventDefault();
} );

function calculateResults (){

  const amount = document.getElementById( 'amount' );
  const interest = document.getElementById( 'interest' );
  const years = document.getElementById( 'years' );
  const monthlyPayment = document.getElementById( 'monthly-payment' );
  const totalPayment = document.getElementById( 'total-payment' );
  const totalInterest = document.getElementById( 'total-interest' );

  const principal = parseFloat( amount.value );
  const calculatedInterest = parseFloat( interest.value ) / 100 / 12;
  const calculatedPayments = parseFloat( years.value ) / 12;

  const x = Math.pow( 1 + calculatedInterest, calculatedPayments );
  const monthly = ( principal*x*calculatedInterest )/( x - 1 );

  if( isFinite( monthly )){
    monthlyPayment.value = monthly.toFixed( 2 );
    totalPayment.value = ( monthly * calculatedPayments ).toFixed( 2 );
    totalInterest.value = ( ( monthly * calculatedPayments ) - principal ).toFixed(2);

    // Show results
    document.getElementById('results').style.display = 'block';

    // Hide loader
    document.getElementById('loading').style.display = 'none';

  } else {
    showError( 'Please check your numbers' );
  }

}

const checkNumbersErrorId = 'check-numbers-error';

function showError( error ) {

  // Hide both Loading and Results
  document.getElementById('loading').style.display = 'none';
  document.getElementById('results').style.display = 'none';

  // create div
  const errorDiv = document.createElement( 'div' );

  // Get element, card and heading
  const card = document.getElementById( 'card' );
  const heading = document.getElementById( 'heading' );

  // set class name to display alert
  errorDiv.className = 'alert alert-danger';

  // set id
  errorDiv.id = checkNumbersErrorId;

  // create text node and append to div
  errorDiv.appendChild( document.createTextNode( error ));

  // insert error in card before heading
  card.insertBefore( errorDiv, heading );

  setTimeout( clearError, 3000 );
}

function clearError() {
  document.getElementById( checkNumbersErrorId ).remove();

}
