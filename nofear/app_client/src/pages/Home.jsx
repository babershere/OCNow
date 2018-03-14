import React from "react";
import Chat from '../components/Chat';
import News from '../components/News'
import Deals from '../components/Deals';
import Events from '../components/Events';
import Weather from '../components/Weather';
// import CitiesDropDown from '../components/CitiesDropDown';

export default class Home extends React.Component {


render(){
    return(
<div>
    <div className='row'>
        <div className='col-md-10'>
            <Events/>
        </div>
        <div className='col-md-2'>
            <Weather/>
        </div>
    </div>
    <hr/>

    <div className='row'>
        <div className='col-md-2'>
            <Deals/>
        </div>
        <div className='col-md-7'>
            <News/>
        
        </div>
        <div className='col-md-3'>
            <div className='row'>
                <div className='col-md-12'>
                    <Chat />
                </div>
            </div>               
        </div>
    </div>
</div>
    )
}   
}
