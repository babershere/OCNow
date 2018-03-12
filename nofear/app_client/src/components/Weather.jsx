import React from "react";

const weatherAPI_Key = 'aa9e57b161236945';

// get location from ???  huntington_Beach, Costa_Mesa, Newport_Beach
let location = '';

class Weather extends React.Component {

    getWeather = async (location) => {
        
        const api_call = await fetch(`http://api.wunderground.com/api/${weatherAPI_Key}/conditions/q/CA/Costa_Mesa.json`)

        const data = await api_call.json();
        console.log(data);
    }

    componentDidMount() {
        this.getWeather
    }

    render() {
        return (
        <h1>Weather Component</h1>
        )
    }
}  

    

export default Weather;