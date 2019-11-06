import React, { Component } from "react";
import './index.css';
import axios from "axios";
import { Input, TextArea, FormBtn } from "../Form";

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:3001/api/auth', { user })
            .then(req => {
                console.log(req);
                console.log(req.body);
            })
            .catch(err => console.log(err));

    };

    render() {
        return (
          <div id="loginForm">
            <form>
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Enter your email"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                type="password"
                placeholder="Enter your password"
              />
              <FormBtn
                onClick={this.handleFormSubmit}
              >
                Login
                  </FormBtn>
            </form>
    
          </div>
        )
    }
}

export default Signin;