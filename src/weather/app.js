
const ui = new UI;
const storage = new Storage;

const weatherLocation = storage.getLocationData();

const weather = new Weather(  weatherLocation.city );

function getWeather()
{
  weather.getWeather()
    .then(
      _weather => {
        ui.paint( _weather );
        console.log( _weather );
      }
    )
    .catch(err => {
      console.error(err);
    });
}

// Call getWeather when DOM is loaded
document.addEventListener( 'DOMContentLoaded', getWeather );

document.getElementById( 'w-change-btn')
  .addEventListener( 'click', ( e ) => {
    e.preventDefault();

    const city = document.getElementById( 'city' ).value;
    weather.changeLocation( city );

    storage.setLocationData( city );

    getWeather();

    // Close modal
    $( '#locModal' ).modal( 'hide' );

  });

