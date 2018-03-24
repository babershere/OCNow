import React, { Component } from 'react';
import {BrowserRouter as Router, Route,} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import UserAdd from "./pages/UserAdd";
import UserEdit from "./pages/UserEdit";
import UserProfile from "./pages/UserProfile";
import SignUp from "./pages/SignUp";
import Landing from "./pages/Landing";
import ProtectedRoute from "./components/ProtectedRoute";


class App extends Component {

  render() {

    return (
      <div>
        <Router>
          <div>
          <Navbar />
            
            <div className = "container">
              <Route exact path ="/" component={Landing}/>
              <ProtectedRoute exact path="/home" component={Home} />
              <Route exact path ="/user/edit" component={UserEdit}/>
              <Route exact path ="/user/add" component={UserAdd}/>
              <ProtectedRoute exact path ="/user/profile/" component={UserProfile}/>
              <Route exact path ="/signup" component={SignUp}/>

            </div>
            {/* footer if we want one */}

          </div>
            
      
        </Router>
      </div>
    );
  }
}

export default App;
