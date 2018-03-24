import React from "react";
import UserModel from "../helpers/models/UserModel";


const formContainerStyle = {
    boxShadow: "0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.3)",
    backgroundColor: "#F6F6F6",
    border: "black",
    padding: "0.5em 0.75em 0.625em"
}


class UserProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state =  {
            thisUser: {}
        }
    }
    componentDidMount() {
        UserModel.getOne(this.props.match.params.id)
        .then(resp => {
            this.setState({thisUser: resp.data});
        })
    }

    render() {
        const firstName = window.localStorage.getItem('firstName');
        const lastName = window.localStorage.getItem('lastName');
        const email = window.localStorage.getItem('email');

        return(
            <div>
                <h1 className="text-center">My Profile</h1>
                <div className="col-md-8 col-md-offset-2" style={formContainerStyle}>
                <div className="form-group">
                        <label htmlFor="firstName">First Name:   {firstName ? <p style={{ color: 'Red' }}> {firstName}</p> : null}</label>
                        <h3>{this.state.thisUser.firstName}</h3>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name :   {lastName ? <p style={{ color: 'Red' }}> {lastName}</p> : null}  </label>
                        <h3>{this.state.thisUser.lastName}</h3>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email: {email ? <p style={{ color: 'Red' }}> {email}</p> : null}</label>
                        <h3>{this.state.thisUser.email}</h3>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <h3>{this.state.thisUser.password}</h3>
                    </div>
                </div>
            </div>
        )
    }
} 

export default UserProfile;