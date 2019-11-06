import React, { Component } from "react";
import { Form, Button } from 'react-bootstrap';
import './index.css';
class Login extends Component {
    state = {
        email: "",
        password: ""
    };


    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        alert(`Email: ${this.state.email}\nPassword: ${this.state.password}`);
        this.setState({ email: "", password: "" });
    };

    render() {
        return (
            <div id="loginForm">
                <form>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email Address{this.state.email}</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email"
                            value={this.state.email} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password{this.state.password}</Form.Label>
                        <Form.Control type="password" placeholder="Enter your password" value={this.state.password}
                            onChange={this.handleInputChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.handleFormSubmit}>
                        Log In
                    </Button>
                </form>

            </div>
        )
    }


}

export default Login;