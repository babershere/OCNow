import React, { Component } from 'react';
import axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.submit = this.submit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    submit = (e) =>{
        e.preventDefault();
        axios.post("/login", this.state)
        .then(resp => {
            console.log("response" , resp);
            console.log(this.props);
            window.localStorage.setItem("token", resp.data.jwt)
            window.localStorage.setItem("firstName", resp.data.user.local.firstName)
            window.localStorage.setItem("lastName", resp.data.user.local.lastName)
            window.localStorage.setItem("email", resp.data.user.local.email)
           
            // this.props.getdata(resp.data.user.local.firstName);
            // window.location = "/home";

            this.props.history.push("/home");
        })
        .catch(err => {
            console.error(err);
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input id="email" className = "form-control" type="email" name="email" placeholder="email"  onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input id="password" className = "form-control" type="password" name="password" placeholder="password" onChange={this.handleInputChange}/>
                    </div>
                    <button  className="btn btn-default navbar-btn">Log In</button>
                </form>
                <div className="form-group" onSubmit={this.handleSubmit}>
                    <a className="btn btn-danger" href="/auth/google">Google +</a>
                </div>
            </div>
        );
    }
}

export default Login;
