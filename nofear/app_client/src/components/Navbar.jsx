import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    

    render() {
        return(
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">
                        Home
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
                    <li
                    className={window.location.pathname === "/user/profile/:id" ? "active" : ""}
                    >
                    <Link to="/user/profile/:id">My Profile</Link>
                    </li>
                    {/* <li className={window.location.pathname === "/search" ? "active" : ""}>
                    <Link to="/search">Search</Link>
                    </li> */}
   
                </ul>

                <form className="navbar-form navbar-left">
                <form className="navbar-search pull-right" onSubmit={this.handleSubmit}>
                    <input type="text" className="search-query form-control" placeholder="Search" value={this.state.value} onChange={this.handleChange} />
                </form> 
                </form>

                <form className="navbar-form navbar-right">                
                    <form className="navbar-search pull-right" >
                        <div className="form-group" onSubmit={this.handleSubmit}>
                            <input type="text" className="form-control" placeholder="User Name" value={this.state.value} onChange={this.handleChange} />
                            <input type="text" className="form-control" placeholder="Password" value={this.state.value} onChange={this.handleChange} />                    
                            <button className="btn btn-primary" disabled="">Login</button>
                        </div>
                    </form> 
                </form>

                <form className="navbar-form navbar-right">                
                    <form className="navbar-search pull-right" >
                        <div className="form-group" onSubmit={this.handleSubmit}>
                            <button className="btn btn-success" disabled="">Sign Up</button>
                        </div>
                    </form> 
                </form>
            </div>         
        </nav>
        )
    }
    

}
  

export default Navbar;