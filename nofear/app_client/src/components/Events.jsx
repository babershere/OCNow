import React from "react";

const TKMS_API_Key = 'ZVGbXAY1XYuASRLrVAdARfZ4yikEatFL';

class Events extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: undefined,
            link: undefined,
            date: undefined,
            venue: undefined,
            image: undefined
        }
        this.getWeather = this.getWeather.bind(this);
      } 
        
    getWeather = async () => {
        const weather_api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.city},ca,us&units=imperial&APPID=${TKMS_API_Key}`);

        const data = await weather_api_call.json();
        // const weatherArr = data.deals;
        this.setState({
            name: undefined,
            link: undefined,
            date: undefined,
            venue: undefined,
            image: undefined
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
                <h5>Current Temp: {this.state.temp} F</h5>
                <h5>Current Condition: {this.state.cond}</h5>
                <h6>Humidity: {this.state.humidity}%</h6>
                <h6>High: {this.state.high} F</h6>
                <h6>Low: {this.state.low} F</h6>                
                   
                    <hr/>
                    

                </div> 
        )
    }
   
}    

export default Events;