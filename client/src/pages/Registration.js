import React, { Component } from "react";
import MyNavBar from '../components/Navbar/';
import { BrowserRouter as Router } from 'react-router-dom';
import Register from "../components/auth/Register";

class Registration extends React.Component {
    render() {
        return (
            <div>
                <MyNavBar />
                <br></br>
                <Register />
            </div>
                )
    }
}

export default Registration;