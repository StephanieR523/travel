import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Navbar, Nav } from 'react-bootstrap';

const MyNavBar = () => {


return (
    <Navbar fixed= 'top' className='px-5 bg-dark navbar-dark' expand="md">
        <Navbar.Brand
            as={Link}
            to={{pathname: '/'}}>
            MyTinerary
        </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
<ul className="navbar-nav ml-auto">
    <li className="nav-item">
        <Link className="nav-link text-light mx-2" to="/Favorites">
            my favorites
        </Link>
    </li>
</ul>



    </Navbar.Collapse>
    </Navbar>
)    
}


export default MyNavBar;