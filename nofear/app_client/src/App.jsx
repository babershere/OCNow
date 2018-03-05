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
              <Route exact path ="/employees" component={EmployeeHome}/>
              <Route exact path ="/employees/add" component={EmployeeAdd}/>
              <Route exact path ="/employees/edit/:id" component={EmployeeEdit}/>
              <Route exact path ="/employees/view/:id" component={EmployeeView}/>
            </div>
            {/* footer go here yo */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
