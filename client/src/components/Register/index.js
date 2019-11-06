import React, { Component } from "react";
import './index.css';
import axios from "axios";
import { Input, TextArea, FormBtn } from "../Form";
class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
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
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }

    axios.post('http://localhost:3001/api/users', { user })
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
            value={this.state.name}
            onChange={this.handleInputChange}
            name="name"
            placeholder="Enter your name"
          />
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
            Register
              </FormBtn>
        </form>

      </div>
    )
  }


}

export default Register;