import React from "react";
import { Link } from "react-router-dom";
import logo from "./ocnow.svg";


class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        window.localStorage.clear();
        window.location = "/";
        console.log("user logged out")
    }

    render() {
        const firstName = window.localStorage.getItem('firstName');

        return (
            //create a function that will clear the local storage and add it to the button
            //then redict to login/landing page


            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <Link id='navbrand' className="navbar-brand" to="/home"><img src={logo} alt="OCNowLogo"/></Link>
                    </div>
                    <ul className="nav navbar-nav">
                        <li
                            className={
                                window.location.pathname === "/home"
                                    ? "active"
                                    : ""
                            }
                        >
                            <Link to="/home">Home</Link>
                        </li>
                        <li className={window.location.pathname === "/user/profile/" ? "active" : ""}>
                            <Link to="/user/profile/">    {firstName ? <p style={{ color: 'white' }}>Hello {firstName}!</p> : null}</Link>
                        </li>
                    </ul>

                    <div className="nav navbar-nav navbar-right">

                        <div className='nav navbar-nav'>

                            <button onClick={() => { this.handleSubmit() }} className="btn btn-default navbar-btn">Log Out</button>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;