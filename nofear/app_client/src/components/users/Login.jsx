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
    submit(e) {
        e.preventDefault();
        axios.post("/auth/login", this.state)
        .then(resp => {
            console.log(resp);
            window.localStorage.setItem("token", resp.data.token)
            this.props.history.push("/");
        })
        .catch(err => {
            console.error(err);
        })
    }

    // NEED TO MAKE SURE ONCHANGE IS CORRECT // 
    
    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label>Email</label>
                        <input className = "form-control" type="email" name="email" onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input className = "form-control" type="password" name="password" onChange={this.handleInputChange}/>
                    </div>
                    <button className = "btn btn-primary" onClick={this.submit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Login;
