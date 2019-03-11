
class UI{

  constructor(){
    this.location = document.getElementById( 'w-location' );
    this.desc = document.getElementById( 'w-desc');
    this.icon = document.getElementById( 'w-icon' );
    this.details = document.getElementById( 'w-details' );
    this.string = document.getElementById( 'w-string' );
    this.himidity = document.getElementById( 'w-humidity' );
    this.depoint = document.getElementById( 'w-dewpoint' );
    this.feelsLike = document.getElementById( 'w-feels-like' );
    this.wind = document.getElementById( 'w-wind' );
  }

  paint( data ){
    this.location.textContent = data.name;

    data.weather.forEach( _j => {
      this.desc.innerHTML += _j.description + '<br>' ;
    });

    this.string.textContent = data.main.temp;

  //  this.humidity.textContent = data.main.humidity;
  }

}
