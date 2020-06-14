// import node modules
import React, { Component } from 'react';

// import components
import WeatherInfo from './components/WeatherInfo';
import WeatherForm from './components/WeatherForm';

// import keys
import { OWAPI_KEY } from './keys'

// main class
class App extends Component {

    state = {
        temperature: '',
        description: '',
        humidity: '',
        wind_speed: '',
        city: '',
        country: '',
        error: null
    }

    getWeather = async e => {
        e.preventDefault();
        let { city, country } = e.target.elements;
        
        let cityValue = city.value;
        let countryValue = country.value;

        if(cityValue && countryValue) {
            const OWAPI_URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&APPID=${OWAPI_KEY}&units=metric`;

            let response = await fetch(OWAPI_URL);
            let data = await response.json();
    
            this.setState({
                temperature: data.main.temp,
                description: data.weather[0].description,
                humidity: data.main.humidity,
                wind_speed: data.wind.speed,
                city: data.name,
                country: data.sys.country,
                error: null
            });
        } else {
            this.setState({error: 'Please, introduce city and country names'})
        }

    }

    render() {
        return (
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <WeatherForm getWeather={this.getWeather}/>
                        <WeatherInfo {...this.state}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;