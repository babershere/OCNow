import React from "react";
import Chat from '../components/Chat';
import Events from '../components/Events'
import Deals from '../components/Deals';
import CitiesDropDown from '../components/CitiesDropDown';

const EventsPage = () => 
    <div>
        <div className='row'>
            <div className='col-md-10'>
                <h3> Events Page</h3>
            </div>
            <div className='col-md-2'>
                <CitiesDropDown/>
            </div>
        </div>
        <hr/>

        <div className='row'>
            <div className='col-md-3'>
                <Deals />
            </div>
            <div className='col-md-5'>
                <Events />
            
            </div>
            <div className='col-md-4'>
                <Chat />
            </div>
        </div>


    </div>
    

export default EventsPage;