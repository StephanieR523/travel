import React from "react";
import MyNavBar from '../components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import MyCarousel from '../components/Carousel';
import MyCard from "../components/Card"


class Home extends React.Component {

  render() {
    return (
      <Router>
        
        <div>
        <MyNavBar />
        </div>
  
        <div>
          <MyCarousel />
        </div>
  
        <div>
          <MyCard />
        </div>
  
      </Router>
    );
  }

}


export default Home;
