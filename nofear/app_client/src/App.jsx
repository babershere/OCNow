import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// employee components
import EmployeeHome from "./pages/employees/EmployeeHome";
import EmployeeAdd from "./pages/employees/EmployeeAdd";
import EmployeeEdit from "./pages/employees/EmployeeEdit";
import EmployeeView from "./pages/employees/EmployeeView";


import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <div className = "container">
              <Route exact path ="/" component={Home}/>
              <Route exact path ="/news" component={News}/>
              <Route exact path ="/chat" component={Chat}/>
              <Route exact path ="/events" component={Events}/>
              <Route exact path ="/user/add" component={UserAdd}/>
              <Route exact path ="/user/view/:id" component={UserView}/>
              <Route exact path ="/user/edit/:id" component={UserEdit}/>

            </div>
            {/* footer if we want one */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
