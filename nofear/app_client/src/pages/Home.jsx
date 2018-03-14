import React from "react";
import Chat from '../components/Chat';
import News from '../components/News'
import Deals from '../components/Deals';
import Events from '../components/Events';
import Weather from '../components/Weather';
// import CitiesDropDown from '../components/CitiesDropDown';

export default class Home extends React.Component {

    

render(){

    let cityName = this.props.cityNameFromAppjsx

    return(
<div>
    <div className='row'>
        <div className='col-md-10'>
            <Events cityNameFromHome={cityName}/>
        </div>
        <div className='col-md-2'>
            <Weather cityNameFromHome={cityName}/>
        </div>
    </div>
    <hr/>

    <div className='row'>
        <div className='col-md-2'>
            <Deals cityNameFromHome={cityName}/>
        </div>
        <div className='col-md-7'>
            <News cityNameFromHome={cityName}/>
        
        </div>
        <div className='col-md-3'>
            <div className='row'>
                <div className='col-md-12'>
                    <Chat cityNameFromHome={cityName}/>
                </div>
            </div>               
        </div>
    </div>
</div>
    )
}   
}
