import React from "react";

const WEATHER_API_Key = process.env.REACT_APP_WEATHER_API_KEY;

const fixHeight = {
    minHeight: "115px",
    maxHeight: '115px'
}

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
        const weather_api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.city},ca,us&units=imperial&APPID=${WEATHER_API_Key}`);

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
        return (
            <div>
                <div className='panel panel-default' id='banner-weather' style={fixHeight}>
                    <div className='panel-body'>
                        <h3 className='weather__value'>{this.props.dropDownText} Weather: </h3>
                    </div>
                </div>
                <h4 className='weather__key'>Currently: <span className='weather__value'> {this.state.temp} F</span> </h4>
                <h4 className='weather__key'>Condition: <span className='weather__value'> {this.state.cond}</span> </h4>
                <h4 className='weather__key'>Humidity: <span className='weather__value'> {this.state.humidity}%</span></h4>
                <h4 className='weather__key'>High:
                    <span className='weather__value'> {this.state.high} F </span>
                    <span className='weather__key'>| Low:
                    <span className='weather__value'> {this.state.low} F</span></span>
                </h4>
                <hr />
            </div>
        )
    }
}

export default Weather;