import React from "react";
import Chat from '../components/Chat';
import News from '../components/News'
import Deals from '../components/Deals';

const Home = () => 
    <div>
        <div className='row'>
            <div className='col-md-12'>
                <h1>Home Page v2</h1>
            </div>
        </div>

        <div className='row'>
            <div className='col-md-3'>
                {Deals}
            </div>
            <div className='col-md-5'>
                {News}
            </div>
            <div className='col-md-4'>
                {Chat}
            </div>
        </div>


    </div>
    

export default Home;