import React from "react";
import { Link } from "react-router-dom";
import CitiesDropDown from "./CitiesDropDown"

class Navbar extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         searchTerm: '',
    //         userPassword: '',
    //         userName: ''
    //     };
    
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //   }
    
    //   handleChange(event) {
    //     const inputName = event.target.name;
    //     this.setState({[inputName]: event.target.value});
    //     console.log(this.state)
    //   }
    
    //   handleSubmit(event) {
    //     event.preventDefault();
    //     this.setState({
    //         // searchTerm: '',
    //         userPassword: '',
    //         userName: ''
    //     }) 

    //   }
    

    render() {
        return(
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">
                        NEWSIE
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

                    <li className={window.location.pathname === "/user/profile/:id" ? "active" : ""}>
                    <Link to="/user/profile/:id">My Profile</Link>
                    </li>   
                </ul>

                <div className="navbar-form navbar-left">
                    <CitiesDropDown />>
                </div>

                <div className="navbar-form navbar-right">                
                    <form className="navbar-search" >
                        <div className="form-group" onSubmit={this.handleSubmit}>
                            <button className="btn btn-danger" disabled="">Log Out</button>
                        </div>
                    </form> 
                </div>
            </div>         
        </nav>
        )
    }
    

}
  

export default Navbar;