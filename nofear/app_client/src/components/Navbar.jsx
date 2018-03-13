import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// import CitiesDropDown from "./CitiesDropDown"

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // searchTerm: '',
            password: '',
            email: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const inputName = event.target.name;
        this.setState({ [inputName]: event.target.value });
        console.log(this.state)
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        axios.post("/login", this.state)
            .then(res => {
                console.log(res);
                window.localStorage.setItem("token", res.data.jwt)
                //this.props.history.push("/");
            })
            .catch(err => {
                console.error(err);
            })
            
        this.setState({
            // searchTerm: '',
            password: '',
            email: ''
        })

    }


    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">
                            OC NOW
                    </Link>
                    </div>
                    <ul className="nav navbar-nav">
                        <li
                            className={
                                window.location.pathname === "/"
                                    ? "active"
                                    : ""
                            }
                        >
                            <Link to="/">Home</Link>
                        </li>

                        <li className={window.location.pathname === "/events" ? "active" : ""}>
                            <Link to="/events">Events</Link>
                        </li>

                        <li className={window.location.pathname === "/user/profile/:id" ? "active" : ""}>
                            <Link to="/user/profile/:id">My Profile</Link>
                        </li>
                    </ul>

                    <div className="navbar-form navbar-left">
                        <form className="navbar-search pull-right" onSubmit={this.handleSubmit}>
                            <input name="searchTerm" type="text" className="search-query form-control" placeholder="Search" value={this.state.searchTerm} onChange={this.handleChange} />
                        </form>
                    </div>

                    <div className="navbar-form navbar-right">
                        <form onSubmit={this.handleSubmit} className="navbar-search" >
                            <div className="form-group" onSubmit={this.handleSubmit}>
                                <input name="email" type="text" className="form-control" placeholder="email" value={this.state.userName} onChange={this.handleChange} />
                                <input name="password" type="password" className="form-control" placeholder="Password" value={this.state.userPassword} onChange={this.handleChange} />
                                <button className="btn btn-primary" disabled="">Log In</button>
                                
                            </div>
                        </form>
                        <button className="btn btn-danger" disabled="">Log Out</button>
                    </div>

                    <div className="navbar-form navbar-right">
                        <form className="navbar-search pull-right" >
                            <div className="form-group" onSubmit={this.handleSubmit}>
                                <button className="btn btn-success" disabled="">Sign Up</button>
                            </div>
                            <div className="form-group" onSubmit={this.handleSubmit}>
                                <a href="/auth/google" className="btn btn-danger" >Google +</a>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }


}


export default Navbar;