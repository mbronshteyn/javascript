
class Storage{

  constructor(){
    this.city;
    this.defaultCity = 'San Diego';
  }

  getLocationData(){
    this.city = localStorage.getItem( 'city' );
    if( this.city === null ){
      this.city = this.defaultCity;
    }

    return {
      city: this.city
    }
  }

  setLocationData( city ){
    localStorage.setItem( 'city', city );
  }
}
