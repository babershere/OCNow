import React, { Component } from "react";
import SignUpForm from "../components/users/SignUpForm"
import Login from "../components/users/Login"
// import Chat from '../components/Chat';
// import News from '../components/News'
// import Deals from '../components/Deals';
// import Events from '../components/Events';
// import Weather from '../components/Weather';
// import CitiesDropDown from '../components/CitiesDropDown';


const SignUp = () =>

    <div>
        <div className='row'>
            <div className='col-md-12 text-center'>
                <h3>Sign up</h3>
            </div>

            <div className='row'>
                <div className='col-md-6 col-md-offset-4'>
                    <SignUpForm />
                </div>
            </div>

            <div className='row'>
                <div className='col-md-6 col-md-offset-4'>
                    <Login />
                </div>
            </div>

        </div>
        <hr />



    </div>


export default SignUp;