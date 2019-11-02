import React, { Component } from "react";
import MyNavBar from '../components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../components/Login';

class Users extends Component {
    state = {
        users: [],
        name: "",
        email:"",
        password: ""
    }
}


function SignIn(){
    return(
        <Router>
            <MyNavBar />
            <div>
                <Login />
            </div>
        </Router>
    );
}

export default SignIn;