import React from "react";
import SignUpForm from "../components/users/SignUpForm";
import css from "./assets/style.css";


const SignUp = () =>

    <div className='signup'>
        <div className='row'>
            <div className='col-md-12 text-center'>
                <h3>Sign up</h3>
            </div>
            <div className='row'>
                <div className='col-md-4 col-md-offset-4'>
                    <SignUpForm />
                </div>
            </div>
        </div>
    </div>

export default SignUp;