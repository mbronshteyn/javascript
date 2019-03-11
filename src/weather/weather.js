
class Weather{

  constructor( city ){
    this.apiKey = '1787e7ff8604ad08fd86f87ceb42104b';
    this.city = city;
  }

  // Fetch Weather
  async getWeather(){

    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}&units=imperial`
    );

    const data = await response.json();

    return data;
  }

  changeLocation( city ){
    this.city = city;
  }
}
