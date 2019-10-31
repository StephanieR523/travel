import React, { Component } from "react";
import MyNavBar from '../components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import MyCard from './components/Card';
import MyCarousel from '../components/Carousel';
import MyCard from "../components/Card"




function Home() {
  return (
    <Router>
      <MyNavBar />
     <div>
         {/* Git test */}
     <MyCarousel />  
     </div><MyCard />

     <div>
      
      </div> 

    </Router>
  );
}

export default Home;
