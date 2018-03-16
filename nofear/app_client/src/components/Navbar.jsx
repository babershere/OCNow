import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {

    render() {

        return(
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">
                        OC Now
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

                    <div className="navbar-form navbar-right">
                        {/* <form onSubmit={this.handleSubmit} className="navbar-search" >
                            <div className="form-group" onSubmit={this.handleSubmit}>
                                <input name="email" type="text" className="form-control" placeholder="email" value={this.state.userName} onChange={this.handleChange} />
                                <input name="password" type="password" className="form-control" placeholder="Password" value={this.state.userPassword} onChange={this.handleChange} />
                                <button className="btn btn-primary" disabled="">Log In</button>
                                
                            </div>
                        </form> */}
                        <Link className="btn btn-danger" to="/signup">Sign Up</Link>
                        <button className="btn btn-danger" disabled="">Log Out</button>
                    </div>

                    {/* <div className="navbar-form navbar-right">
                        <form className="navbar-search pull-right" >
                            <div className="form-group" onSubmit={this.handleSubmit}>
                                <button className="btn btn-success" disabled="">Sign Up</button>
                            </div>
                            <div className="form-group" onSubmit={this.handleSubmit}>
                                <a  className="btn btn-danger" onClick={
                                    (e)=>{
                                        e.preventDefault();
                                        console.log("sup");
                                        axios.get("/auth/google")
                                        .then(function(resp) {
                                            console.log(resp)
                                        })

                                    }
                                } >Google +</a>
                            </div>
                        </form>
                    </div> */}
                </div>
            </nav>
        )
    }


}


export default Navbar;