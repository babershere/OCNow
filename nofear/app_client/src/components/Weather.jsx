import React from "react";

const WEATHER_API_Key = '5286c4ca96fdd98641a1184d6fc3a285';

class Weather extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cityjson: undefined,
            temp: undefined,
            high: undefined,
            low: undefined,
            humidity: undefined,
            cond: undefined
        }
        this.getWeather = this.getWeather.bind(this);
      } 
        
    getWeather = async () => {
        const weather_api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.city},ca,us&units=imperial&APPID=${WEATHER_API_Key}`);

        const data = await weather_api_call.json();
        // const weatherArr = data.deals;
        this.setState({
            cityjson: data.name,
            temp: data.main.temp,
            high: data.main.temp_max,
            low: data.main.temp_min,
            humidity: data.main.humidity,
            cond: data.weather[0].description
        })
        console.log("data: ", data);
    }

        componentDidMount() {
            this.getWeather();
        }

        componentWillReceiveProps(nextProps) {
            if (nextProps) {
                this.getWeather();
            }
        }

        render() {
            return(
                <div>
                <h4>{this.state.cityjson} Weather: </h4>
                <h4>Current Temp: {this.state.temp} F</h4>
                <h4>Current Condition: {this.state.cond}</h4>
                <h5>Humidity: {this.state.humidity}%</h5>
                <h5>High: {this.state.high} F</h5>
                <h5>Low: {this.state.low} F</h5>                
                   
                    <hr/>
                    

                </div> 
        )
    }
   
}    

export default Weather;