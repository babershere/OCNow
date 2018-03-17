import React from "react";
import { Link } from "react-router-dom";


const Landing = () =>

    <div>
        <h1>Landing Page</h1>
        <Link to='/home' className="btn btn-success">Go to home page!!</Link>
    </div>

export default Landing;