import React from "react";
import Chat from '../components/Chat';
import News from '../components/News'
import Deals from '../components/Deals';
import CitiesDropDown from '../components/CitiesDropDown';

const Home = () => 
    <div>
        <div className='row'>
            <div className='col-md-10'>
                <h3>Home Page</h3>
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
                <News />
            
            </div>
            <div className='col-md-4'>
                <Chat />
            </div>
        </div>


    </div>
    

export default Home;