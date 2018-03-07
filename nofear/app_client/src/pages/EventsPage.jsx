import React from "react";
import Chat from '../components/Chat';
import Events from '../components/Events'
import Deals from '../components/Deals';

const EventsPage = () => 
    <div>
        <div className='row'>
            <div className='col-md-12'>
                <h1> Events Page</h1>
            </div>
        </div>

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