import React, { Component } from "react";
import MyNavBar from '../components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from '../components/Register';
class Users extends Component {
    state = {
        users: [],
        name: "",
        email:"",
        password: ""
    }
}


function Registration(){
    return(
        <Router>
            <MyNavBar />
            <div>
                <Register />
            </div>
        </Router>
    );
}

export default Registration;