import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Navbar, Nav, Form, FormControl, Button, } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'; 
import logo from '../../logo1.png';
import './style.css'

const MyNavBar = () => {

return (
<div>

<Navbar bg="#ffffff">
   
    <Navbar.Brand
    href="#home">
        <img
        src= {logo}
        width="125"
        height="80"
        className="d-inline-block align-top"
        alt="logo"
      />
    </Navbar.Brand>
    
     <Navbar.Toggle />
    <Navbar.Collapse className= "justify-content-end">
    <Form inline>
      <FormControl type="text" placeholder="Search" />
      <Button variant="outline-info">Search</Button>
    </Form>

    <Nav.Item className="justify-content-end">
      <Nav.Link href="/favorites">favorites</Nav.Link>
    </Nav.Item>
    <Nav.Item className="justify-content-end">
      <Nav.Link href="/signin">sign in </Nav.Link>
    </Nav.Item>

    </Navbar.Collapse>

    

    </Navbar>
    </div>
    )}

    export default MyNavBar