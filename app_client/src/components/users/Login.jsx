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

// NEED TO REVIEW ROUTES // 

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
            console.log(resp);
            console.log(this.props);
            window.localStorage.setItem("token", resp.data.jwt)
            window.location = "/home";
            // this.props.history.push("/");
        })
        .catch(err => {
            console.error(err);
        })
    }

    // NEED TO MAKE SURE ONCHANGE IS CORRECT // 
    
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
                    <a className="btn btn-danger" href="/auth/google"
                    // onClick={
                    //     (e) => {
                    //         e.preventDefault();
                    //         console.log("sup");
                    //         // axios.get("/auth/google")
                    //         //     .then(function (resp) {
                    //         //         console.log(resp)
                    //             })

                    //     }
                    // } 
                    >Google +</a>
                </div>
            </div>
            
        );
    }
}

export default Login;
