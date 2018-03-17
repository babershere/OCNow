import React from "react";
import { Link } from "react-router-dom";

const buttonStyle = {
    // border: '0px',
    // padding: '8px 0px',
    // margin: '0 2px'
}

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userEmail: '',
            userPassword: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
  

    handleSubmit(event) {
        event.preventDefault();
    }

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
                        <form onSubmit={this.handleSubmit} className="navbar-search" >
                            <div className="form-group" onSubmit={this.handleSubmit}>
                                <input name="userEmail" type="text" className="form-control" placeholder="email" value={this.state.userEmail} onChange={this.handleChange} />
                                <input name="userPassword" type="password" className="form-control" placeholder="password" value={this.state.userPassword} onChange={this.handleChange} />
                                <button style={buttonStyle} className="btn btn-primary" disabled="">Log In</button>                              
                            </div>
                        </form>   
                        <button style={buttonStyle} className="btn btn-danger" disabled="">Log Out</button>                    
                    </div>

                    <div className="navbar-form navbar-left">
                        <form className="navbar-search" >
                            <div className="form-group" onSubmit={this.handleSubmit}>
                                <Link to='/signup' className="btn btn-success" disabled="">Sign Up</Link>
                            </div>
                            {/* <div className="form-group" onSubmit={this.handleSubmit}>
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
                            </div> */}
                        </form>
                    </div>
                </div>
            </nav>
        )
    }


}


export default Navbar;