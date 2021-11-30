import axios from 'axios'
import React, { Component } from 'react'

export default class Weather extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: null,
            weather_main: null,
            weather_description: null,
            weather_icon: null,
            main_temp: null,
            main_feels_like: null,
            main_temp_min: null,
            main_temp_max: null,
            main_pressure: null,
            main_humidity: null,
            wind_speed: null,
            icon: null
        }
    }

    componentDidMount = () => {
        this.getWeather();
    }

    getWeather = () => {
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=Toronto&cnt=7&appid=5d2bb6ed44114269f2d7194376dc9640')
            .then(res => {
                this.setState({
                    name: res.data.name,
                    weather_main: res.data.weather[0].main,
                    weather_icon: res.data.weather[0].icon,
                    main_temp: res.data.main.temp,
                });
                console.log(res.data);
            });
    }

    render() {
        return (
            <div className='container'>
                <div class="container-fluid ">
                    <div class="d-flex justify-content-center px-3">
                        <div class="card">
                            <img className='img' src={`http://openweathermap.org/img/wn/${this.state.weather_icon}@2x.png`} />
                            <h2 class="ml-auto white mr-4 mt-3 mb-0">{this.state.name}</h2>
                            <h2 class="ml-auto white mr-4 mb-0 med-font">{this.state.weather_main}</h2>
                            <h1 class="ml-auto white mr-4 large-font">{parseFloat(this.state.main_temp - 273.0).toFixed(2)}&#176;</h1>
                            <p class="time-font white mb-0 ml-4 mt-auto">08:30 <span class="sm-font">AM</span></p>
                            <p class="ml-4 white mb-4">Wednesday, 18 October 2019</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
