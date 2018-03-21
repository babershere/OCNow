import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
      }  

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {

        return(

        <nav className="navbar navbar-inverse">
            <div className="container">
                    <div className="navbar-header">
                        <Link id='navbrand' className="navbar-brand" to="/home">OC Now</Link>
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

                        <li className={window.location.pathname === "/user/profile/:id" ? "active" : ""}>
                        <Link to="/user/profile/:id">My Profile</Link>
                        </li>   
                    </ul>
                    

                <div className="nav navbar-nav navbar-right">
                    <div className='nav navbar-nav'>
                        <button type="button" className="btn btn-default navbar-btn">Log Out</button>
                    </div>
                </div>
            </div>        
        </nav>
        )
    }


}


export default Navbar;