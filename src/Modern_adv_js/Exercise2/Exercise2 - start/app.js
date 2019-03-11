
var content = document.querySelector('#content');

content.innerHTML = "President " + pres.fullName() + " was president number " + pres.order + " of the United States of America.";

for( i in pres ){
  console.log( pres[i],': type: ', typeof pres[i]);
}

console.log( '===============');

for( i in pres ){
  if( pres.hasOwnProperty( i)) {
    console.log(pres[i], typeof pres[i]);
  }
}

