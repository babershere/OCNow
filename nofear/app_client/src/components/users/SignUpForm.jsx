import React, { Component } from "react";
// import FormStates from "../../helpers/FormStates";
// import FormBtns from "./FormBtns";

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        }
    
    }

    render() {
        // let readOnly = false;
        // if(this.props.formState === FormStates.view) {
        //     readOnly = true;
        // }
        return (
            <div>
                <form> 
                    {/*  PENDING TO MODIFY ON CHANGE */}
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" name="firstName" placeholder="First Name..." onChange={this.props.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" name="lastName" placeholder="Last Name..." onChange={this.props.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" name="email" placeholder="Email..." onChange={this.props.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="Password" placeholder="********"  onChange={this.props.handleChange}/>
                    </div>

                    <button type="button" className="btn btn-default navbar-btn">Sign Up!</button>

                    {/* <div className="clearfix">
                        <FormBtns handleDelete = {this.props.handleDelete} 
                        handleEdit={this.props.handleEdit} 
                        formState = {this.props.formState} 
                        handleSubmit={this.props.handleSubmit}/>
                    </div> */}

                </form>
            </div>
        )
    }
}
export default SignUpForm;


