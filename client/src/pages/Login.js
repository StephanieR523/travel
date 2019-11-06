import React, { Component } from "react";
import MyNavBar from '../components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signin from '../components/Signin';
function Login(){
    return(
        <Router>
            <MyNavBar />
            <div>
            <Signin />    
            </div>
        </Router>
    );
}

export default Login;