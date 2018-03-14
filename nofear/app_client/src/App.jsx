import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import UserAdd from "./pages/UserAdd";
import UserEdit from "./pages/UserEdit";
import UserProfile from "./pages/UserProfile";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <div className = "container">
              <Route exact path ="/" component={Home}/>
              <Route exact path ="/user/edit" component={UserEdit}/>
              <Route exact path ="/user/add" component={UserAdd}/>
              <Route exact path ="/user/profile/:id" component={UserProfile}/>
            </div>
            {/* footer if we want one */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
