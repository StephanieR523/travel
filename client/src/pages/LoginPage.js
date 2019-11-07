import React, { Component } from "react";
import MyNavBar from '../components/Navbar/';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from "../components/auth/Login";

class LoginPage extends React.Component {
    render() {
        return (
            <div>
                <MyNavBar />
                <br></br>
                <Login />
            </div>
                )
    }
}

export default LoginPage;