import React from "react";
import { Link } from "react-router-dom";
import Login from "../components/users/Login"

class Landing extends React.Component {

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
            <div className='container'>

                <div className='row'>
                    <div className="col-md-4"></div>
                        <div className="col-md-4">

                        <div className="panel panel-default">                        
                                
                            <div className="panel-body">
                            <h3>Please Log In:</h3>
                            <Login />
                            {/* <form onSubmit={this.handleSubmit} >
                                <div className="form-group" onSubmit={this.handleSubmit}>
                                    <input name="userEmail" type="text" className="form-control" placeholder="email" value={this.state.userEmail} onChange={this.handleChange} />
                                    <input name="userPassword" type="password" className="form-control" placeholder="password" value={this.state.userPassword} onChange={this.handleChange} />
                                    <button className="btn btn-primary" disabled="">Log In</button>                              
                                </div>
                            </form>  */}
                        </div>
</div>  
                        </div>
                    <div className="col-md-4"></div>
                </div>

                <div className='row'>
                <div className="col-md-4"></div>
                    <div className="col-md-4">
                    <div className="panel panel-default"> 
                            <div className="panel-body">
                            <h3>Or Sign Up:</h3>     
                            <br/>
                    <Link to='/signup' className="btn btn-default" disabled="">Sign Up</Link>
                    </div>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
</div>
 

    

        )
    }
    
}



export default Landing;